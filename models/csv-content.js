const mongoose = require('mongoose')
const { isEmail } = require('validator')

const CsvSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide name'],
    maxlength: 100,
  },
  rollno: {
    type: String,
    required: [true, 'please provide rollno'],
    maxlength: 100,
  },
  gender: {
    type: String,
    required: [true, 'please provide gender'],
    maxlength: 30,
  },
  stream: {
    type: String,
    required: [true, 'please provide stream'],
    maxlength: 100,
  },
  mail: {
    type: String,
    required: [true, 'please provide mail'],
    validate: {
      validator: isEmail,
      message: 'please enter an valid email',
    },
  },
  year: {
    type: String,
    required: [true, 'please provide year'],
    maxlength: 100,
  },
})

module.exports = mongoose.model('CsvContentFromApi', CsvSchema, 'csvcontents')
