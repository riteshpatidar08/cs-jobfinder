import express from 'express';
import dbConnect from './config/dbConnect.js';
import config from './config/config.js';
import UserRouter from './routes/userRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(cors());
console.log('hello');

app.use(express.json());

dbConnect();

app.use('/api', UserRouter);

app.listen(config.app.PORT, () => {
  console.log('server is running on 3000');
});
