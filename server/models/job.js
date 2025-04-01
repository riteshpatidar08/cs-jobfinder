import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  location: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  jobDescription: {
    type: String,
  },
  companyName: {
    type: Sring,
  },
  experiance: {
    type: String,
  },
  employment: {
    type : [String],
    enum : ["Full-time","Part-time", "Contract" , "Internship"]
  } ,
  requirement : {
    type : [String]
  },
  salary : {
    min : {
        type : Number
    },
    max : {
    type : Number
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  postedDate: {
    type: Date,
    default: Date.now(),
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  }
  }
});

const Job = mongoose.model('Job' , jobSchema)
//job title
//location
//jobDescription
//email
//phoneNumber,
//companyName,
//requirement ,
//experiance
//isActive,
//postedDate ,
//createdBy , id user
//applicants => userid [1.2.3]
