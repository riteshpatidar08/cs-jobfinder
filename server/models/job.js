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
    type: String,
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
  } },

  isActive: {
    type: Boolean,
    default: true,
  },
  postedDate: {
    type: Date,
    default: Date.now(),
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  } ,
  applicants : [{
    userId : {
      type : mongoose.Schema.Types.ObjectId ,
      ref : "User"
    },
    resume : {
      type : String
    },
    status : {
   type : String ,
   enum : ["Accepted" , "Pending" , "Rejected"] ,
   default : "Pending"
    }
  }]
  }
);

const Job = mongoose.model('Job' , jobSchema)
export default Job
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
