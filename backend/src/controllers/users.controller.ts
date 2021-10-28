import { Request, Response } from "express";
import { Pool } from "mysql2/promise";
import { connect } from "../database/connection";
import { UserI } from "../models/user.interface";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {

    try {

        const hash = await bcrypt.hash(req.body.password, 12)
        const newUser: UserI = {
            name: 'default',
            email: req.body.email,
            password: hash,
            gender: 'null',
            preference: 'null'
        }
        if (!(await findUserByEmail(req.body.email)))
            return res.send({message: "failed"})
        const conn: Pool = connect()
        await conn.query('INSERT INTO users SET ?', [newUser])
        const token = await getToken(conn)
        res.cookie('clientID', token, { httpOnly: true})
        return res.send({message: "created"})
        
    } catch {

        return res.send({message: "failed"})
    }
    
}

export const allUsers = async (req: Request, res: Response) => {

    const conn: Pool = connect()
    const users = await conn.query('SELECT * FROM users')
    return res.json(users[0])
}

export const deleteUser = async (req: Request, res: Response) => {

    const userId: string = req.params.id
    const conn: Pool = connect()
    await conn.query('DELETE FROM users WHERE id=?', [userId])
    return res.json("User Deleted")
}

export const deleteAll = async (req: Request, res: Response) => {

    const conn: Pool = connect()
    await conn.query(`DELETE FROM users`)
    return res.json("All users Deleted")
}

export const findUserByEmail = async (email: string): Promise<boolean> => {

    const conn: Pool = connect()
    const users = await conn.query(`SELECT * FROM users`)
    const listUsers: UserI[] = users[0] as UserI[]

    for (const user of listUsers)
    {
        if (user.email === email)
            return false
    }
    return true
}

export const findUser = async (req: Request, res: Response) => {

    const userId: string = getUserId(req.cookies['clientID'])
    const conn: Pool = connect()
    const getUser: any = await conn.query('SELECT * from users WHERE id=?', [userId])
    const user: UserI = getUser[0] as UserI
    return res.send(user)
}

export const updateUser = async (req: Request, res: Response) => {

    const userId: string = getUserId(req.cookies['clientID'])
    const upuser = req.body.data
    const conn: Pool = connect()
    const info = await conn.query('UPDATE users SET ? WHERE id=?', [upuser, userId])
    return res.json("User Updated")
}

const getToken = async (conn: Pool): Promise<string> => {

    const users = await conn.query('SELECT * FROM users')
    const listUsers = users[0] as UserI[]
    const currUser = listUsers[listUsers.length - 1]
    const token = jwt.sign({
        id : currUser.id},
        "345345kljñkljczzxcczx",
        { expiresIn: "7200s"})
    return token
}

const getUserId = (token: string): string => {

    const decoded: any = jwt.decode(token)
    return decoded.id as string
}