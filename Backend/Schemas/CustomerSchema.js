const mongoose=require('mongoose');
const { Schema } = mongoose;

const CustomerSchema= new Schema({
   name:{
     required:true,
      type:String
   },
  mobile:{
    unique:true,
    type:String
  },
  email:{
    unique:false,
    type:String
  },
  password:{
    required:true,
    type:String
  },
  address:{
    type:String
  },
  
})
mongoose.models={}
module.exports = CustomerSchema
// let obj={shopID:req.body.shopID,itemsName:req.body.itemsName,type:req.body.type,price:req.body.price,quantity:req.body.quantity,shopID:req.body.shopID,ItemDesc: req.body.ItemDesc,images: req.body.images}