import express from 'express'
import { secrets } from './config.js'
import cors from 'cors'
import pool from './db.js'

const app = express()

app.use(express.json())
app.use(cors({
    origin : secrets.clientUrl,
    optionsSuccessStatus: 200
}))

app.get("/health", (req , res) => {
    res.status(200).json({
        message : "server is ok"
    })
})

app.get("/health/db", async (req, res) => {
    try{
        const result = await pool.query(
            `SELECT 1`
        )
        console.log(result)
        return res.status(200).json({
            message : "OK"
        })
    }catch(error: any){
        res.status(500).json({
            error : error.message
        })
    }
})

app.listen(secrets.port, () => console.log(`Server is listening at ${process.env.PORT}`))