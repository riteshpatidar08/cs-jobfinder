import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
//creating a register api for the users
export const register = async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      email,
      phoneNumber,
      role,
      password,
      jobseeker = {},
      recruiter = {},
    } = req.body;
    console.log(req.file);
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({
        message: 'User is already exists , Please Login',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);
    const userData = {
      name,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    };
    if (role === 'jobseeker') {
      const parsedData = JSON.parse(jobseeker);
      console.log(parsedData);
      userData.jobseeker = {
        ...parsedData,
        resume: req.file ? req.file.path : '',
      };
    }

    if (role === 'recruiter') {
      const parsedData = JSON.parse(recruiter);
      console.log(parsedData);
      userData.recruiter = {
        ...parsedData,
      };
    }

    const newUser = await User.create(userData);
    res.status(201).json({
      message: 'user registered successfully',
    });
  } catch (error) {
    res.status(500).json({
      messsage: error.message,
    });
  }
};

export const login = async (req, res) => {
  //first we get the email and password from the req.body
  const { email, password } = req.body;
  //NOTE 1st check find the user using the email
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
    return  res.status(404).json({
        message: 'user is not registered please register  and try again',
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
     return res.status(400).json({
        message: 'Invalid Credentails',
      });
    }
    console.log(isValidPassword);

    const token = jwt.sign(
      {
     userId : user._id ,
     name : user.name ,
     role : user.role
      },
      config.app.JWT_SECRET,
      { expiresIn: config.app.JWT_EXPIRATION }
    );
    console.log(token);
    res.status(200).json({
      message: 'Login successfull',
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
