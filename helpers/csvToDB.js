const csv = require('csvtojson')
const CsvContent = require('../models/csv-file')

const csvToDB = async (path) => {
  const csvFilePath = path
  const jsonArray = await csv({ output: 'csv' }).fromFile(csvFilePath)
  jsonArray.map(async (item) => {
    try {
      const name = item[0]
      const rollno = item[1]
      const gender = item[2]
      const stream = item[3]
      const mail = item[4]
      const year = item[5]
      await CsvContent.create({
        name,
        rollno,
        gender,
        stream,
        mail,
        year,
      })
    } catch (error) {
      console.log(error)
      return false
    }
  })
  return true
}

module.exports = csvToDB
