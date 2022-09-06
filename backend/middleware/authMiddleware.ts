import jwt, { JwtPayload } from 'jsonwebtoken'
import User from '../models/userModel'
import {Middleware} from '../data/types'


export const protect : Middleware = async (req, res, next) => {
    let token: string | null = null;
    console.log(req.headers.authorization)
    // && req.headers.authorization.startsWith("Bearer")
    if (req.headers.authorization) {
        try {
            // Get token from header
            token = req.headers.authorization
            // .split(' ')[1]

            // verify the token
            const decoded = <JwtPayload>jwt.verify(token, <jwt.Secret>process.env.JWT_SECRET)
            // get user from payload
            req.user = await User.findById(decoded.id).select("-password");
            next()
        } catch (err) {
            console.log(err)
            res.status(401).json({ error: 'Not Authorized' })
        }
    } else {
        return res.status(401).json({ error: "You have to be logged in to access this route" });
    }

    if (!token) {
        return res.status(401).json({ error: "Not authorized, no token" })
    }
}
