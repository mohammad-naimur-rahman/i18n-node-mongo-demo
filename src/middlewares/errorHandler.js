const errorHandler = (err, req, res, next) => {
  console.error(err.stack)

  let responseMessage = 'Internal Server Error'

  if (process.env.NODE_ENV === 'development') {
    responseMessage = err.message || 'Internal Server Error'
  }

  if (res.headersSent) {
    return next(err)
  }

  res.status(err.status || 500).json({
    status: 'fail',
    message: process.env.NODE_ENV === 'development' ? err.message || responseMessage : responseMessage,
  })
}

module.exports = errorHandler
