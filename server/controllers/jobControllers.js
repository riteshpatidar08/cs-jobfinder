import Job from '../models/job.js';
import User from '../models/user.js';

export const createJob = async (req, res) => {
  try {
    console.log(req.body);
    const newJob = await Job.create(req.body);
    if (!newJob) {
      return res.status(400).json({
        message: 'failed',
      });
    }

    res.status(201).json({
      message: 'success',
      data: newJob,
    });
  } catch (error) {
    res.status(500).json({
      message: 'internal server error',
    });
  }
};

export const getJobs = async (req, res) => {
  try {
    const { totalItems = 10, currentPage = 2 } = req.query;
    const jobs = await Job.find()
      .sort({ postedDate: -1 })
      .limit(totalItems)
      .skip((currentPage - 1) * totalItems)
      .populate('createdBy', 'name email');

    const totalJobs = Job.countDocuments();

    res.status(200).json({
      message: 'job fetched successfully',
      totalPages: Math.ceil(totalJobs / totalItems),
      length: jobs.length,
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



export const applyJob = async(req,res) => {
  try {
    const {userId , jobId} = req.body ;
    //NOTE find the user by using userId 
    const user = await User.findById(userId) ;

    //NOTE handle the case if user is not exist 
    if(!user) {
      res.status(404).json({
        message : "user is not found"
      })
    }

    //if user found extract the resume
    const resume = user.jobseeker.resume

    if(!resume){
      res.status(404).json({
        message : 'Resume not found please upload your resume' 
      })
    }

    const job = await Job.findById(jobId) ;

     if(!user) {
      res.status(404).json({
        message : "job is not found"
      })
    }
    const appliedJob = user.appliedJobs.jobId.some((id)=> id.toString() === jobId)

    if(appliedJob){
      res.status(400).json({
        message : "You have already applied for this job"
      })
    }

  job.applicants.push({
    userId ,
    resume 
  })

  user.appliedJobs.jobId.push(jobId)
  
await user.save() 
await job.save() 

res.status(200).json({
  message : "Job applied Successfully"
})
  } catch (error) {
    
  }
}