export const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // log en consola

  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
  });
};
