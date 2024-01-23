//basic lib inport
const express = require('express')
const app = new express()
const helmet = require('helmet')
const cors = require('cors')
const { connectToDB } = require('./src/config/dbConnection')
const router = require('./src/routes/api')
const errorHandler = require('./src/middlewares/errorHandler')

//error handler middleware
app.use(errorHandler)

app.use(helmet())
app.use(express.json())
app.use(cors())

//database connection
connectToDB()

//routing implement
app.use('/api/v1', router)

//undefined route Implement
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Route Not Found',
  })
})

module.exports = app
