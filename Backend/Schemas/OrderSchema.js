const mongoose=require('mongoose');
const { Schema } = mongoose;

const OrderSchema= new Schema({
   shopid:{
     required:true,
      type:String
   },
  productid:{
    type:Array
  },
  paymentid:{
  type:String,
  unique:true,
    required:true
  },
  price:{
    type:String
  },
  address:{
    required:false,
    type:String
  },
})
// {shopid:req.body.token,productid:req.body.productid,paymentid:req.body.paymentid,price:req.body.price,address:req.body.address}
mongoose.models={}
module.exports = OrderSchema
