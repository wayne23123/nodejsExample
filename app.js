const express = require('express');
// 88. 除了 pug 也可以用其他的
// const { engine } = require('express-handlebars');

const app = express();

// 88. 除了 pug 也可以用其他的 handlebars
// app.engine(
//   'handlebars',
//   engine({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'handlebars',
//   })
// );
// app.set('view engine', 'handlebars');

// 91. 改成用 ejs (ejs 不支持 layout)
app.set('view engine', 'ejs');

// 81. 渲染pug https://expressjs.com/en/5x/api.html#app.set
// app.set('view engine', 'pug')
app.set('views', 'views');

const bodyParser = require('body-parser');

// 71.
const path = require('path');

// 66. 路由拆分
// const adminRoutes = require('./routes/admin')
// 79.
// const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// 98. 增加 controllers
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));

// 75. 解決首頁不能訪問 public 下的 css 樣式文件
app.use(express.static(path.join(__dirname, 'public')));

// 66. 路由拆分
// 68. 路徑增加 /admin/
// app.use('/admin', adminRoutes)
// 79.
// app.use('/admin', adminData.routes);
app.use(shopRoutes);

// 98. 增加 controllers
app.use('/admin', adminRoutes);

const errorController = require('./controllers/error');
// 99. 完成 controllers
app.use(errorController.get404);

// 67. 404 頁面
// app.use((req, res, next) => {
//   // 67. 設置 404 狀態碼
//   // 71. 配置 404 頁面
//   console.log('404 Page Not Found: ', req.url);
//   // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))

//   // 84.
//   res.status(404).render('404', { pageTitle: 'page not found' });
// });

app.listen(3000);

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
