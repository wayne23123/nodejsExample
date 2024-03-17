const express = require('express')

const router = express.Router()

// 70.
const path = require('path')

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
    // 70. 路徑問題 lunix /views/shop.html， windows 是 \views\shop.html
})

module.exports = router
