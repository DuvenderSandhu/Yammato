const mongoose=require('mongoose');
const { Schema } = mongoose;

const FoodSchema= new Schema({
    shopID:{
      type:String,
      required:true
    },
    itemsName:{
      type:String,
      required:true
    },
    type:{
      type:Array,
      required:true
    },
    price:{
      type:Number,
      required:true
    },
    quantity:{
      type:Number,
      required:true
    },
    ItemDesc: {
      type:String,
      required:true
    },
    // images: Array,
})
mongoose.models={}
module.exports = FoodSchema
// let obj={shopID:req.body.shopID,itemsName:req.body.itemsName,type:req.body.type,price:req.body.price,quantity:req.body.quantity,shopID:req.body.shopID,ItemDesc: req.body.ItemDesc,images: req.body.images}