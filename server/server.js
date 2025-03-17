import express from 'express';
import dbConnect from './config/dbConnect.js';

const app = express();

dbConnect();

app.listen(3000, () => {
  console.log('server is running on 3000');
});
