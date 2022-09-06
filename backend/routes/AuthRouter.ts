import express from 'express'
import { AuthController } from '../controllers/AuthController'
import {protect} from '../middleware/authMiddleware'

const authRouter = express.Router();


const authController = new AuthController();

authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)
authRouter.get('/@me', protect, authController.getMe)


export default authRouter;
