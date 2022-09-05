import { ControllerFunction, User } from '../data/types'
import UserModel from '../models/userModel'
import bcrypt from 'bcryptjs'

export class AuthController {
    login: ControllerFunction = (req, res) => {

    }

    register: ControllerFunction = async (req, res) => {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        if (!username || !email || !password) {
            res.status(400);
            throw new Error('Invalid user data!')
        }

        // generate salt for hashing
        const salt = await bcrypt.genSalt(10);
        // hash password
        const hashedPassword = await bcrypt.hash(password, salt)

        try {
            const user = await UserModel.create(new User(username, hashedPassword, email))
            if (user) {
                res.status(201).json({ _id: user.id, username: user.username, email: user.email })
            } else {
                res.status(400)
                throw new Error("Invalid User Data!")
            }
        } catch (err) {
            res.status(400).json({ error: "Email already exists" })
        }
    }
}
