const { StatusCodes } = require('http-status-codes')
const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const csvToDB = require('../helpers/csvToDB')
const customErrors = require('../errors')

const uploadCsv = async (req, res) => {
  if (!req.files.csv) {
    throw new customErrors.BadRequestError('No file uploaded')
  }

  const file = req.files.csv

  if (!file.mimetype.startsWith('text/csv')) {
    throw new customErrors.BadRequestError('File type not supported')
  }

  if (file.size > 1024 * 1024) {
    throw new customErrors.BadRequestError(
      'Fize size must be smaller than 1 mb',
    )
  }

  // create temprovary name for file
  const ext = file.name.split('.')
  const temp = Date.now().toString() + file.name
  const tempFileName = crypto.createHash('md5').update(temp).digest('hex')
  const fileExt = tempFileName + `.${ext[1]}`
  const upPath = path.join(__dirname, '../temp/') + fileExt

  await file.mv(upPath, async function (err) {
    if (err) {
      throw customErrors.CustomAPIError('something went wrong')
    }

    // function for inserting content into db
    const csvToDBOperation = await csvToDB(upPath)

    // delete file from temp
    fs.unlink(upPath, (err) => {
      if (err) {
        console.log(upPath)
      }
    })

    if (!csvToDBOperation) {
      return res.status(500).json({ msg: `something went wrong` })
    } else {
      return res
        .status(StatusCodes.OK)
        .json({ msg: `file uploaded succesfully` })
    }
  })
}

module.exports = uploadCsv
