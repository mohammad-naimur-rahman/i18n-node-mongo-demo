const RFQModel = require('../models/RFQmodel')

exports.createRFQ = async (req, res, next) => {
  try {
    const createdRFQ = await RFQModel.create(req.body)
    res.status(201).json({
      status: 'success',
      data: createdRFQ,
    })
  } catch (err) {
    next(err)
  }
}

exports.getAllRFQ = async (req, res, next) => {
  try {
    const allRFQ = await RFQModel.find()
    const lang = req.headers['accept-language']
    RFQModel.setDefaultLanguage(lang)
    res.status(200).json({
      status: 'success',
      data: allRFQ,
    })
  } catch (err) {
    next(err)
  }
}
