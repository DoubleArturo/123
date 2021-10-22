//引用 Express 與 Express路由器
const express = require('express')
//引用路由模組
const router = express.Router()

const home = require('./modules/home')
const shorturls = require('./modules/shorturls')

router.use('/', home)
router.use('/shorturls', shorturls)

//匯出路由器
module.exports = router