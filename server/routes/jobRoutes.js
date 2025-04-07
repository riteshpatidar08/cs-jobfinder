import express from 'express' ;
import { createJob, getJobs } from '../controllers/jobControllers.js';
import verifyToken from '../middlewares/verifyToken.js';
import checkRole from '../middlewares/checkRole.js'
const router = express.Router() ;


router.post('/create', verifyToken, checkRole('recruiter'), createJob)
router.get('/' , verifyToken , getJobs)

export default router