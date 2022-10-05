const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const register = require('./controllers/register');
const login = require('./controllers/login');
const authentication = require('./controllers/authentication');
const { errorHandler, unknownEndpoint } = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');
require('dotenv').config();
require('express-async-errors');

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to MongoDB!');
  })
  .catch((error) => {
    console.log('Failed to connect to MongoDB');
    console.error(error);
  });

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('/register', register);
app.use('/login', login);
app.use('/auth-endpoint', authentication);

app.use(errorHandler);
app.use(unknownEndpoint);

module.exports = app;
