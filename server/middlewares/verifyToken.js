import jwt from 'jsonwebtoken';
import config from '../config/config.js';
const verifyToken = (req, res, next) => {
  console.log(req.headers);
  if (req.headers.authorization) {
    const auth = req.headers.authorization;
    if (auth.startsWith('Bearer')) {
      const token = auth.split(' ')[1];
      console.log(token);
      const decoded = jwt.verify(token, config.app.JWT_SECRET);
      console.log(decoded);
      req.user = decoded;
      next();
    } else {
      return res.status(403).json({
        message: 'Invalid token',
      });
    }
  } else {
    return res.status(401).json({
      message: 'No token found',
    });
  }
};

export default verifyToken;
