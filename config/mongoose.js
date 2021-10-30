const mongoose = require('mongoose')

//設定資料庫連線
mongoose.connect('mongodb://localhost/shortURL')
const db = mongoose.connection

//取得db連線狀態
db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected')
})

module.exports = db