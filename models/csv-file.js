const mongoose = require('mongoose')
const CsvSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  rollno: {
    type: String,
  },
  gender: {
    type: String,
  },
  stream: {
    type: String,
  },
  mail: {
    type: String,
  },
  year: {
    type: String,
  },
})

module.exports = mongoose.model('CsvContentFromFile', CsvSchema, 'csvcontents')
