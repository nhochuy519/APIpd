const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Products = require('./modules/productModule');
const fs = require('fs')


const productRouter = require('./routes/productRoute') 

require('dotenv').config()

const data = JSON.parse(fs.readFileSync('./product.json','utf-8'))

mongoose.connect(process.env.DATABASE)
    .then(()=>{
        console.log('kết nối thành công')
    })


app.use('/product',productRouter)




app.use((req,res,next)=>{{
    res.status(400).send('không tìm thấy')
}})


app.listen(process.env.PORT,()=>{
    console.log('đang lắng nghe trên cổng 3000')
})

