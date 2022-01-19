const jwt = require('jsonwebtoken')
const customErrors = require('../errors')

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new customErrors.unauthenticated('No token provided')
  }

  const token = authHeader.split(' ')[1]

  try {
    jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (error) {
    throw new customErrors.unauthenticated(
      'Not authorized to access this route',
    )
  }
}

module.exports = authenticationMiddleware
