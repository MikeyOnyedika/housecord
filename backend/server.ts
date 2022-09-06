import express from 'express'
import AuthRouter from './routes/AuthRouter'
import { connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = process.env.PORT

async function main() {
    async function connectDb() {
        console.log("connecting to mongodb...")
        await connect(<string>process.env.MONGODB_URI)
    }

    try {
        await connectDb();
        console.log("successful connecting to mongodb")
    } catch (err) {
        throw new Error(<string>err)
    }

    app.use(express.urlencoded({ extended: true }))
    app.use('/', AuthRouter)

    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))

}

main()