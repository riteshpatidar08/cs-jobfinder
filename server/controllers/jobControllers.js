import Job from '../models/job.js';

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
