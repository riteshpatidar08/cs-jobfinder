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
  

});
