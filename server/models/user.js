import mongoose from 'mongoose';

const UserScehma = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Name is required'],
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ['jobseeker', 'recruiter', 'admin'],
  },
  jobseeker: {
    education: [
      {
        institution: {
          type: String,
        },
        year: {
          type: Number,
        },
        degree: {
          type: String,
        },
      },
    ],
    experience: [
      {
        company: {
          type: String,
        },
        jobRole: {
          type: String,
        },
        duration: {
          type: String,
        },
      },
    ],
    skills: [String],
    resume: String,
  },
  recruiter: {
    companyName: {
      type: String,
    },
    companyWebsite: {
      type: String,
    },
  },
  appliedJobs : {
  jobId : [{
      type : mongoose.Schema.Types.ObjectId ,
      ref : 'Job'
    }]
  }
});

UserScehma.pre('save', function (next) {
  if (this.role === 'recruiter') {
    this.jobseeker = undefined;
    next();
  }

  if (this.role === 'jobseeker') {
    this.recruiter = undefined;
    next();
  }
});

const User = mongoose.model('User', UserScehma);

export default User;
