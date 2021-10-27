import { ServerApp } from "./ServerApp";

function main()
{
    const app: ServerApp = new ServerApp()

    app.listen(5000)
}

main()