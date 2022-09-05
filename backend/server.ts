import express from 'express'
import AuthRouter from './routes/AuthRouter'
import { connect } from 'mongoose'
const app = express();
const PORT = 3989;


async function main() {
    async function connectDb() {
        console.log("connecting to mongodb...")
        await connect("mongodb://localhost:27017/housecord")
    }

    try {
        await connectDb();
        console.log("successful connecting to mongodb")
    } catch (err) {
       throw new Error(<string> err)
    }

    app.use(express.urlencoded({ extended: true }))
    app.use('/', AuthRouter)

    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))

}

main()