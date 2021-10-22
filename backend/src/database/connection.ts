import { createPool, Pool } from 'mysql2/promise'

export function connect(): Pool
{
    const newConnection = createPool({
        host: "database",
        port: 3306,
        user: "user_matcha",
        password: "pass_matcha",
        database: "mysql_matcha"
    })
    return newConnection
}