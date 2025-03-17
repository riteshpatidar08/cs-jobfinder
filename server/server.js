import express from 'express';
import dbConnect from './config/dbConnect.js';
import config from './config/config.js';

const app = express();
console.log('hello')
dbConnect();

app.listen(config.app.PORT, () => {
  console.log('server is running on 3000');
});
