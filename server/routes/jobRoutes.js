import express from 'express' ;
import { applyJob, createJob, getApplicants, getJobByCreator, getJobs } from '../controllers/jobControllers.js';
import verifyToken from '../middlewares/verifyToken.js';
import checkRole from '../middlewares/checkRole.js'
const router = express.Router() ;


router.post('/create', verifyToken, checkRole('recruiter'), createJob)
router.get('/' , verifyToken , getJobs)
router.post('/apply' , applyJob)
router.get('/:id' , getJobByCreator)
router.get('/applicants/:id' ,getApplicants)
export default router