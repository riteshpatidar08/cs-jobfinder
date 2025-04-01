//to check the role for the signed in user

const checkRole = (...allowedRoles) => {
  console.log(allowedRoles);
  return (req, res, next) => {
    if (allowedRoles.includes(req.user.role)) {
      next();
    } else {
      return res.status(403).json({
        message: 'you are not allowed to access this resource',
      });
    }
  };
};

export default checkRole;
