import express from 'express'
import { User } from './data/types'
import { addUser, getUser } from './data/users'
const app = express();
const PORT = 3989;

app.use(express.urlencoded({ extended: true }))


app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))