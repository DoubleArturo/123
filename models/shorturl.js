const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  shortUrl: { type: String, required: true },
  originalUrl: { type: String, required: true },
})

module.exports = mongoose.model("ShortURL", urlSchema)
//透過mongoose幫我們建立model，叫做 ShortURL ，並使用剛剛定義的 urlSchema