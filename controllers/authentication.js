const router = require('express').Router();
const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => {
  res.json({ message: 'You are authorized to access me' });
});

module.exports = router;
