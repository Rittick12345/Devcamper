const errorHandler = (err, req, res, next) => {
  //console.log(err.stack.red);
  console.log(err.name);
  //Mongoose bad objectId

  res.status(err.statusCode).json({
    success: false,
    error: err.message || 'Server Error',
  });
};

module.exports = errorHandler;
