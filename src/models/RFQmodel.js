const { Schema, model } = require('mongoose')
const mongooseIntl = require('mongoose-intl')

const RFQSchema = new Schema(
  {
    title: {
      type: String,
      intl: true,
      required: true,
    },
    description: {
      type: String,
      intl: true,
      required: true,
    },
    attachments: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timeStamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

RFQSchema.plugin(mongooseIntl, { languages: ['en', 'ar'], defaultLanguage: 'en' })

const RFQModel = model('RFQ', RFQSchema)

module.exports = RFQModel
