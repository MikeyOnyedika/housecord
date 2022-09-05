import { RequestHandler } from "express";
import User from '../models/userModel'

const checkDuplicateEmail: RequestHandler = async (req, res, next) => {
    const email = req.body.email;
    if (!email) {
        res.status(400)
        return res.json({ error: "Email not provided!" })
    }

    // check for duplicate email
    const duplicate = await User.findOne({ email })

    if (duplicate) {
        res.status(400)
        return res.json({ error: "Email already exists!" })
    }
    next();
}

export default checkDuplicateEmail;
