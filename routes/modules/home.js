//引用 Express 與 Express路由器
const express = require('express')
//引用路由模組
const router = express.Router()
//引用 ShortUrl model
const ShortURL = require('../../models/shorturl')
const hostUrl = 'http://localhost:3000/'
const shortUrlGenerator = require('../../public/shorten')

//定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

//填入長網址，並產生短網址
router.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl
  let shortUrl

  ShortURL.findOne({ originalUrl })
    .lean()
    .then(url => {
      if (!url) {
        shortUrl = hostUrl + shortUrlGenerator()
        ShortURL.create({ originalUrl, shortUrl })
      } else {
        shortUrl = url.shortUrl
      }
      res.render('index', { originalUrl, shortUrl })
    })
    .catch(error => console.log(error))
})

//填入短網址，將畫面導入長網址
router.get('/:shortUrl', (req, res) => {
  const shortUrl = hostUrl + req.params.shortUrl

  ShortURL.findOne({ shortUrl })
    .lean()
    .then(url => {
      res.redirect(url.originalUrl)
    })
    .catch(error => console.log(error))
})

//匯出路由器
module.exports = router