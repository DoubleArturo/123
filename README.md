# 短網址產生器
使用 Node.js, Express 和 MongoDB 製作的短網址產生器。


## 專案展示
可以透過此網址 https://calm-depths-48841.herokuapp.com/ 實際使用短網址服務。

## 專案目標
- 親手打造一個兼具前端體驗與後端資料庫的網路應用程式。
- 使用網路開發的專業工具鍊，例如全端開發框架、資料庫、指令列與版本控制系統。
- 初步建立「產品思維」，從使用者體驗與產品功能的角度規劃程式開發流程。
- 使用 Git 來管理程式碼，並養成隨時紀錄 commit 的習慣。
- 安裝 Node.js 執行環境，並啟動 Express 伺服器。
- 在 Express 框架中，運用樣板引擎來打造具有動態資料的前端頁面。
- 啟動 MongoDB 資料庫伺服器，並與 Express 專案對接，順利打造出具有 CRUD 功能的網站。

## 專案規格
- 使用者輸入原始網址後，可產生一組 5 碼英數組合的短網址。
- 使用者可透過短網址，連到原始網址的網頁。
- 使用者若輸入相同的原始網址，會產生相同的短網址。
- 使用者可以一鍵複製短網址。
- 若使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者。

## 專案環境
*  [Visual Studio Code](https://code.visualstudio.com/) - development environment
*  [Node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com/) - JavaScript runtime environment
*  [Express.js](https://expressjs.com/) - web application framework
*  [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - template engine
*  [MongoDB](https://www.mongodb.com/) - document-oriented database
*  [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool(OBM)
*  [body-parser](https://www.npmjs.com/package/body-parser) - middleware
*  [clipboardjs](https://github.com/zenorocha/clipboard.js) - middleware
*  [method-override](https://www.npmjs.com/package/method-override) - middleware

body-parser": "^1.19.0",
    "clipboard": "^2.0.8",
    "express": "^4.17.1",
    "express-handlebars": "^5.3.4",
    "method-override": "^3.0.0",
    "mongoose": "^6.0.11"


## 安裝與執行
1. 在終端機輸入指令將此專案 clone 到本機電腦

```
git clone https://github.com/DoubleArturo/shortURL.git
```

2. 安裝相關套件

```
cd shortURL
```

```
npm install
```

3. 匯入種子資料

```
npm run seed
```

4. 執行程式

```
npm run dev
```

終端機顯示 `App is running on http://localhost:3000` 表示啟動完成，請至 http://localhost:3000 使用此專案程式。