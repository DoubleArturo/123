//引用 Express 與 Express路由器
const express = require('express')
//引用路由模組
const router = express.Router()
//引用 ShortUrl model
const ShortURL = require('../../models/shorturl')

//定義首頁路由
router.get('/', (req, res) => {
  ShortUrl.find()
    .lean()
    .sort({}) //尚未決定短網址如何排序
    .then(shorturls => res.send('hihi shortURL'))
    .catch(error => console.error(error))
})

//匯出路由器
module.exports = router