const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../models/user');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const passwordCorrect =
    user !== null ? await bcrypt.compare(password, user.password) : false;

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'invalid username or password!',
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email,
    },
    process.env.SECRET,
    { expiresIn: '24h' }
  );

  res.status(200).send({ message: 'Login Success!', token, email });
});

module.exports = router;
