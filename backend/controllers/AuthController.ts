import { ControllerFunction, User } from '../data/types'
import UserModel from '../models/userModel'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'



export class AuthController {
    // @desc Authenticate User
    // @route  POST /login
    // @access Public
    login: ControllerFunction = async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({ error: "Invalid User Data!" })
        }
        const user = await UserModel.findOne({ email })
        // check for email and if passwords match
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({ _id: user.id, username: user.username, email: user.email, token: this.generateToken(user._id) })
        } else {
            res.status(400).json({ error: "Invalid credentials" })
        }
    }

    // @desc Register new User
    // @route  POST /register
    // @access Public
    register: ControllerFunction = async (req, res) => {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        if (!username || !email || !password) {
            return res.status(400).json({ error: "Invalid User Data!" })
        }

        // generate salt for hashing
        const salt = await bcrypt.genSalt(10);
        // hash password
        const hashedPassword = await bcrypt.hash(password, salt)

        try {
            const user = await UserModel.create(new User(username, hashedPassword, email))
            if (user) {
                res.status(201).json({ _id: user.id, username: user.username, email: user.email, token: this.generateToken(user._id) })
            } else {
                res.status(400).json({ error: "Invalid User Data!" })
            }
        } catch (err) {
            res.status(400).json({ error: "Email already exists" })
        }
    }

    getMe: ControllerFunction = async (req, res) => {
        res.status(200).json(req.user)
    }

    private generateToken = (id: Types.ObjectId) => {
        return jwt.sign({ id }, <jwt.Secret>process.env.JWT_SECRET, { expiresIn: '30d' })
    }
}
