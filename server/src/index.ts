import express from 'express'
import 'dotenv/config'

const app = express()

app.use(express.json())

app.get("/health", (req , res) => {
    res.status(200).json({
        message : "server is ok"
    })
})

app.listen(process.env.PORT, () => console.log(`Server is listening at ${process.env.PORT}`))