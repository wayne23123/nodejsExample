const express = require('express')

const app = express()

const bodyParser = require('body-parser')

// 66. 路由拆分
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))

// 66. 路由拆分
app.use(adminRoutes)
app.use(shopRoutes)

app.listen(3000)


// // 66. 路由拆分前
// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended: false}))
// app.use('/add-product',(req,res,next)=>{
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>')
// })
// app.post('/product',(req,res,next)=>{
//     console.log(req.body)
//     res.redirect('/')
// })
// app.use('/',(req,res,next)=>{
//     console.log('in the middleware')
//     res.send('<h1>hello world</h1>')
// })
// app.listen(3000)


// const express = require('express')

// const app = express()

// // 64-3.添加中間件處理不會解析 req.body 的問題
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended: false}))

// // 63. https://expressjs.com/en/5x/api.html#app
// app.use('/',(req,res,next)=>{
//     console.log('this always runs')
//     next()
// })
// app.use('/add-product',(req,res,next)=>{
//     console.log('in the middleware')
//     // res.send('<h1>add-product-page</h1>')
//     // // 63.故意不寫 next() 來控制順序

//     // 64-1.
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>')
// })

// // 65. use 可以用 post 代替，來確保訪問路徑時，適用對的打 API 方法
// app.post('/product',(req,res,next)=>{
//     console.log(req.body)
//     res.redirect('/')
// })
// // app.use('/product',(req,res,next)=>{
// //     console.log(req.body) // 64-2. 打印 undefined，這邊不會解析 req.body，添加中間件處理，64-4. 好了打印 { title: 'test' }
// //     res.redirect('/')
// // })

// app.use('/',(req,res,next)=>{
//     console.log('in the middleware')
//     res.send('<h1>hello world</h1>')
// })


// // // 60.中間件練習 ------------------------------------------------------------------
// // // use 允許添加一個新的中間件函數
// // // 最後調用 next() 讓程序跑到下一個中間件
// // app.use((req, res, next)=>{
// //     console.log('in the middleware')
// //     next() // allows the request to continue to the next middleware in line
// // })
// // app.use((req,res,next)=>{
// //     console.log('in the middleware')
// //     res.send('<h1>hello world</h1>')
// // })

// // 62. 能省略 app.listen ------------------------------------------------------------------
// // const http = require('http')
// // const server = http.createServer(app)
// // server.listen(3000)

// app.listen(3000)