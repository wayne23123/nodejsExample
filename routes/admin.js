const express = require('express');

const router = express.Router();

// 70.
const path = require('path');

// 73.
// const rootDir = require('../util/path');

// 98. 增加 controllers
// const productsController = require('../controllers/products');

// 109.
const adminController = require('../controllers/admin');

// 79. 數據
// const products = [];

// 98. 增加 controllers
// /admin/add-products => GET
// router.get('/add-product', productsController.getAddProduct);

// 109.
router.get('/add-product', adminController.getAddProduct);

// /admin/add-products => POST
// router.post('/add-product', productsController.postAddProduct);

// 109.
router.post('/add-product', adminController.postAddProduct);

// /admin/products => GET
// router.get('/products', adminController.getProducts);

// router.get('/admin/add-product',(req,res,next)=>{
// 68. /admin 直接加在外面
// 70.
// router.get('/add-product', (req, res, next) => {
//   // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
//   // ../ 改成 .. 確保在 windows 和 mac 都可以用
//   // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
//   // 73.
//   // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
//   // 84.
//   // res.render('add-product', {pageTitle: 'add product'})

//   // 86.
//   res.render('add-product', {
//     pageTitle: 'add product',
//     path: '/admin/add-product',
//     formsCSS: true,
//     productCSS: true,
//     activeAddProduvt: true,
//   });
// });

// router.post('/add-product', (req, res, next) => {
//   console.log(req.body);
//   // 79.
//   products.push({ title: req.body.title });
//   res.redirect('/');
// });

// module.exports = router
// 79.
// exports.routes = router;
// exports.products = products;

// 98. 增加 controllers
module.exports = router;
