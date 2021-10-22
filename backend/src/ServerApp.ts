import express, { Application } from "express";
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