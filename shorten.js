//密碼組成
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const letters = lowerCaseLetters + numbers + upperCaseLetters

const shortUrlLength = 5
const shortUrl = ''

function shortUrlGenerator() {

  for (let i = 1; i <= shortUrlLength; i++) {
    shortUrl += letters[Math.floor(Math.random() * letters.length)]
  }

  return `http://localhost:3000/${newLetters}`
}

module.exports = shortUrlGenerator