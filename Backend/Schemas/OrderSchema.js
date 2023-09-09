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
  user:{
    type:String,
    required:true
  },
  address:{
    required:false,
    type:String
  },
  status:{
    type:String,
    default:"Pending"
  },
  expectData:{
    type:String,
    default:""
  }
})

mongoose.models={}
module.exports = OrderSchema
