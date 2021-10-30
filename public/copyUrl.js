// function copyUrl() {
//   let copyShortUrl = document.getElementById("#copyShortUrl")
//   // copyShortUrl.innerHTML = window.location.href;
//   // console.log(Url.innerHTML)
//   // copyShortUrl.select();
//   // document.execCommand("copy");
//   const selection = window.getSelection()
//   const range = document.createRange()
//   range.selectNodeContents(copyShortUrl)
//   selection.removeAllRanges()
//   selection.addRange(range)
//   document.execCommand('copy')
//   alert('已複製短網址連結: ' + copyShortUrl)
// }