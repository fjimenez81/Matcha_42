import { Request, Response } from 'express'

export const welcome = (req: Request, res: Response): Response => {

    return res.json('Welcome to Matcha!')
}