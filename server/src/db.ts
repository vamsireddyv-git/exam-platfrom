import { Pool } from "pg";
import { secrets } from "./config.js";

const pool = new Pool({
    user : secrets.userName,
    password : secrets.databasePswd,
    host : secrets.host,
    port : Number(secrets.dbPort),
    database : secrets.dbName
})


export default pool