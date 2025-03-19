import express from 'express' ;
import { register } from '../controllers/userControllers.js';
import upload from '../middlewares/upload.js';
const UserRouter = express.Router()


UserRouter.post('/register', upload.single('resume') , register)


export default UserRouter