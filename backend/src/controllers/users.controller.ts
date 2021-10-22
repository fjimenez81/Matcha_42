import { Request, Response } from "express";
import { Pool } from "mysql2/promise";
import { connect } from "../database/connection";
import { UserI } from "../models/user.interface";

export const createuser = async (req: Request, res: Response) => {

    console.log("ESTO ES REQ: ", req.body)
    const newUser: UserI = req.body
    const conn: Pool = connect()
    await conn.query('INSERT INTO users SET ?', [newUser])
    return res.json("User Created")
}

export const allUsers = async (req: Request, res: Response) => {

    const conn: Pool = connect()
    const users = await conn.query('SELECT * FROM users')
    return res.json(users[0])
}