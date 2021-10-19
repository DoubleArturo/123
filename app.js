const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const routes = require('./routes')

const app = express()
const PORT = 3000
const db = mongoose.connection

//設定資料庫連線
mongoose.connect('mongodb://localhost/shortURL')

//取得db連線狀態
db.on('errer', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected')
})

app.use(methodOverride('_method'))
app.use(routes)

//設定路由
app.get('/', (req, res) => {
  res.send('hello world')
})

//設定PORT
app.listen(3000, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})

