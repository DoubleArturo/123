//引用 Express 與 Express路由器
const express = require('express')
//引用路由模組
const router = express.Router()

const ShortURL = require('../../models/shorturl')

//新增一筆原網址
router.post('/', (req, res) => {
  const originalURL = req.body.originalurl
  return ShortURL.create({ originalURL })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//匯出路由器
module.exports = router