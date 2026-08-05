import express, { Request, Response } from 'express'
const app = express()

const port = 5000


app.get("/" , (req : Request , res : Response)=>{
res.send("Backend is working")
})

app.listen(port, ()=>{
    console.log(`Http server is running on the http://localhost:${port}`)
})