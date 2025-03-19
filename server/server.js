import express from 'express';
import dbConnect from './config/dbConnect.js';
import config from './config/config.js';
import UserRouter from './routes/userRoutes.js';
import multer from 'multer';
import cors from 'cors';
const app = express();
// const upload = multer() ;
app.use(cors());

app.use(express.json());
// app.use(upload.any())
dbConnect();

app.use('/api', UserRouter);

app.listen(config.app.PORT, () => {
  console.log('server is running on 3000');
});
