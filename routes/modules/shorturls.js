//引用 Express 與 Express路由器
const express = require('express')
//引用路由模組
const router = express.Router()
const validUrl = require('valid-url')

const ShortURL = require('../../models/shorturl')



//匯出路由器
module.exports = router