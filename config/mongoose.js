const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/shortURL'

//設定資料庫連線
mongoose.connect(MONGODB_URI)
const db = mongoose.connection

//取得db連線狀態
db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected')
})

module.exports = db