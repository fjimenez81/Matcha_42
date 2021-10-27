import express, { Application } from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import indexRoute from "./routes/index.route";
import userRoute from "./routes/users.route";

export class ServerApp
{
	app: Application

	constructor()
	{
		this.app = express()
        this.middlewares()
        this.routes()
	}

    middlewares()
    {
        this.app.use(express.json())
        this.app.use(cors({
            origin: "http://localhost:3000",
            credentials: true,
            methods: "POST, GET, PUT, DELETE"
        }))
        this.app.use(cookieParser())
    }

    routes()
    {
        this.app.use(indexRoute)
        this.app.use('/users', userRoute)
    }

	listen(port: number): void
	{
		this.app.listen(port)
        console.log("Listen On Port: ", port)
	}
}