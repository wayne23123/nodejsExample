const express = require('express')

const router = express.Router()

// 70.
const path = require('path')

// 73.
const rootDir = require('../util/path')

// 79. 數據
const products = []

// router.get('/admin/add-product',(req,res,next)=>{
// 68. /admin 直接加在外面
// 70.
router.get('/add-product',(req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    // ../ 改成 .. 確保在 windows 和 mac 都可以用
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
    // 73.
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    // 79.
    products.push({ title: req.body.title })
    res.redirect('/')
})

// module.exports = router
// 79.
exports.routes = router
exports.products = products
