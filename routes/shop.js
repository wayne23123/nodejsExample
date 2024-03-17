const express = require('express')

const router = express.Router()

// 70.
const path = require('path')

// 73.
const rootDir = require('../util/path')

// 79.
const adminData = require('./admin')

router.get('/',(req,res,next)=>{
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
    // ../ 改成 .. 確保在 windows 和 mac 都可以用
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
    // 73.
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    // 70. 路徑問題 lunix /views/shop.html， windows 是 \views\shop.html

    // 81.
    res.render('shop')

    // 79.
    console.log('shop.js', adminData.products)
})

module.exports = router
