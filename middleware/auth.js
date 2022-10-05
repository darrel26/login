const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authentication = async (req, res, next) => {
  const token = await req.headers.authorization.split(' ')[1];
  const decodedToken = await jwt.verify(token, process.env.SECRET);
  const user = await decodedToken;

  req.user = User.findById(user.id);
  next();
};

module.exports = authentication;
