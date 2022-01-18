const Content = require('../models/csv-content')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const createContent = async (req, res) => {
  const content = await Content.create(req.body)
  res.status(StatusCodes.CREATED).json({ content })
}

const getAllContent = async (req, res) => {
  const content = await Content.find({})

  res.status(StatusCodes.OK).json({ content, count: content.length })
}

const getSingleContent = async (req, res) => {
  const { id: contentId } = req.params

  const content = await Content.findOne({ _id: contentId })

  if (!content) {
    throw new CustomError.NotFoundError(`No content with id : ${contentId}`)
  }

  res.status(StatusCodes.OK).json({ content })
}

const updateContent = async (req, res) => {
  const { id: contentId } = req.params

  const content = await Content.findOneAndUpdate({ _id: contentId }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!content) {
    throw new CustomError.NotFoundError(`No content with id : ${contentId}`)
  }

  res.status(StatusCodes.OK).json({ content })
}

const deleteContent = async (req, res) => {
  const { id: contentId } = req.params

  const content = await Content.findOne({ _id: contentId })

  if (!content) {
    throw new CustomError.NotFoundError(`No content with id : ${contentId}`)
  }

  await content.remove()
  res.status(StatusCodes.OK).json({ msg: 'Success! content removed.' })
}

module.exports = {
  createContent,
  deleteContent,
  updateContent,
  getAllContent,
  getSingleContent,
}
