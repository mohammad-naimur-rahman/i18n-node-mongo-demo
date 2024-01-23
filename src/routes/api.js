const express = require('express')
const { createRFQ, getAllRFQ } = require('../controllers/RFQControllers')
const router = express.Router()

router.route('/rfq').get(getAllRFQ).post(createRFQ)

module.exports = router
