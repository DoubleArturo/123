const ShortURL = require('../shorturl')
const db = require('../../config/mongoose')
const hostUrl = 'http://localhost:3000/'

const urlData = [
  {
    originalUrl: 'https://www.mobile01.com/index.php',
    shortUrl: 'http://localhost:3000/T8yqO'
  },
  {
    originalUrl: 'https://tw.alphacamp.co/',
    shortUrl: 'http://localhost:3000/u23Yb'
  },
  {
    originalUrl: 'https://www.youtube.com/',
    shortUrl: 'http://localhost:3000/EdsVU'
  }
]

db.once('open', () => {
  urlData.forEach((item) => {
    ShortURL.create({
      originalUrl: item.originalUrl,
      shortUrl: item.shortUrl
    })
  })
  console.log('Seed data created done! Ctrl+C to Exit.')
})