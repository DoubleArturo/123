const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const routes = require('./routes')
const exphbs = require('express-handlebars')
require('./config/mongoose')

const app = express()
const PORT = 3000

//載入樣版引擎
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 設定靜態文件
app.use(express.static('public'))
// 使用 body-parser
app.use(bodyParser.urlencoded({ extended: true }))
// 設定路由
app.use(routes)
// 設定 methodOverride
app.use(methodOverride('_method'))

//設定PORT
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})

