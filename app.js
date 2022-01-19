require('dotenv').config()
require('express-async-errors')

// express app
const express = require('express')
const connectDB = require('./db/connectDB')

const app = express()

// packages
const fileUpload = require('express-fileupload')
const moragn = require('morgan')
// seccurity packages
const rateLimiter = require('express-rate-limit')
const helmet = require('helmet')
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')

// error handler
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/error-handler')

app.use(
  rateLimiter({
    windowMs: 10 * 60 * 1000,
    max: 100,
  }),
)
app.use(moragn('tiny'))
app.use(fileUpload())
app.use(helmet())
app.use(express.json())
app.use(xss())
app.use(mongoSanitize())

// routes
const csvRouter = require('./routes/csvRoutes')
const auth = require('./middleware/auth')

app.use('/api/csv', auth, csvRouter)

app.get('/', (req, res) => {
  res.send('csv manager')
})

// error handlers
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000

const start = async () => {
  await connectDB(process.env.MONGO_URI)
  app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
  })
}

start()
