import mongoose from 'mongoose'

const productSchema  = mongoose.Schema({
    name:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    brand:{type:String,required:true},
    price:{type:Number,required:true},
    rating:{type:Number,required:true},
    countInStock:{type:Number,required:true},
    numReviews:{type:Number,required:true},
    review:[{type:String}]
},{ timestamps:true})

const Products = mongoose.model('Products',productSchema)
export default Products