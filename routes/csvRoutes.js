const express = require('express')

const router = express.Router()

const uploadCsv = require('../controllers/uploadContoller')
const {
  createContent,
  deleteContent,
  getAllContent,
  getSingleContent,
  updateContent,
} = require('../controllers/contentController')

router.post('/uploads', uploadCsv)
router.route('/').get(getAllContent).post(createContent)
router
  .route('/:id')
  .get(getSingleContent)
  .delete(deleteContent)
  .patch(updateContent)
module.exports = router
