import 'dotenv/config'

const port = process.env.PORT
let dbPort : unknown = Number(process.env.DB_PORT);
let databasePswd;
let jwtSecret;
const dbName = process.env.DB_NAME
const userName = process.env.USER
const host = process.env.HOST
const clientUrl = process.env.CLIENT_URL;

if(typeof dbPort === 'number'){
    dbPort = process.env.DB_PORT
}else{
    throw new Error("Invalid database port")
}

if(process.env.DATABASE_PSWD){
    databasePswd = process.env.DATABASE_PSWD
}else{
    throw new Error("Database password missing or Not loaded properly")
}

if(process.env.JWT_SECRET){
    jwtSecret = process.env.JWT_SECRET
}else{
    throw new Error("Jwt Secret is missing or Not loaded properly")
}

export const secrets = {
    port,
    dbPort,
    databasePswd,
    jwtSecret,
    clientUrl,
    dbName,
    userName,
    host
}