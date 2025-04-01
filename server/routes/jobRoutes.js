import express from 'express' ;
import { createJob } from '../controllers/jobControllers.js';
import verifyToken from '../middlewares/verifyToken.js';
import checkRole from '../middlewares/checkRole.js'
const router = express.Router() ;


router.post('/create', verifyToken, checkRole('recruiter'), createJob)


export default router