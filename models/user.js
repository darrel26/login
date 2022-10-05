const mongoose = require('mongoose');
require('dotenv').config();

// create new database schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is empty!'],
    unique: [true, 'Same email already exist!'],
  },
  password: {
    type: String,
    required: [true, 'Password is empty!'],
    unique: false,
  },
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
