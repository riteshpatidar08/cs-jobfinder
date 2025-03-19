import express from 'express' ;
import { login, register } from '../controllers/userControllers.js';
import upload from '../middlewares/upload.js';
const UserRouter = express.Router()


UserRouter.post('/register', upload.single('resume') , register)
UserRouter.post('/login',login)

export default UserRouter