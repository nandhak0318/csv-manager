const CustomAPIError = require('./custom-api')
const NotFoundError = require('./not-found')
const BadRequestError = require('./bad-request')
const unauthenticated = require('./unauthenticated')

module.exports = {
  CustomAPIError,
  NotFoundError,
  BadRequestError,
  unauthenticated,
}
