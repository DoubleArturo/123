const express = require('express')
const app = express()
const PORT = 3000

//設定路由
app.get('/', (req, res) => {
  res.send('hello world')
})

//設定PORT
app.listen(3000, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})

