import { ServerApp } from "./ServerApp";
//import { connect } from './database/connection'

function main()
{
    const app: ServerApp = new ServerApp()

    app.listen(3000)
}

main()