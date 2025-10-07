import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoute from './routes/user.route.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

// Middlewares 
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.send("hello")
})

app.use('/api/user', userRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT , ()=> console.log(`server is running on http:://localhost:${PORT}`))