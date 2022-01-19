require('dotenv').config()
const jwt = require('jsonwebtoken')
const token = jwt.sign({ hello: 'hllo' }, process.env.JWT_SECRET, {
  expiresIn: '50d',
})

console.log(token)
