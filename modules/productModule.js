
const mongoose = require('mongoose')



const  productSize = new mongoose.Schema({
    nameSize:{
        type:String,
        require:[true,"Quần áo phải có size"]
    },
    quantitySize:{
        type:Number,
        default:0

    }

})

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        require:[true,"sản phẩm phải có tên"],
        trim:true,
        unique:false
        
       
    },
    classify: {
        type:String,
        require:[true,"sản phẩm phải có phần loại"]
    },
    price: {
        type:Number,
        require:[true,"sản phẩm phải có giá"],
        trim:true
    },
    ratings:{
        type:Number,
        default:4.5
    },
    description: {
        type:String,
        trim:true
    },
    size:{
        type:[productSize],
        default:2
    },
    images:[String],
    imageCover:{
        type:String,
        require:[true,'Phải có ảnh sản phẩm']
    }
    

})


const Products = mongoose.model('Products',productSchema)


module.exports=Products