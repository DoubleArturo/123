function shortUrlGenerator() {
  //密碼組成
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const letters = lowerCaseLetters + numbers + upperCaseLetters
  const shortUrlLength = 5
  let shortUrl = ''

  for (let i = 1; i <= shortUrlLength; i++) {
    shortUrl += letters[Math.floor(Math.random() * letters.length)]
  }

  return shortUrl
}

module.exports = shortUrlGenerator