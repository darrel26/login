const requestLogger = (req, res, next) => {
  console.log(`Accessed date    : ${new Date().toLocaleDateString()}`);
  console.log(`Method           : ${req.method}`);
  console.log(`Path             : ${req.path}`);
  console.log(`Body             : ${JSON.stringify(req.body)}`);
  console.log(`Status Code      : ${res.statusCode}`);
  console.log('-----');
  next();
};

module.exports = requestLogger;
