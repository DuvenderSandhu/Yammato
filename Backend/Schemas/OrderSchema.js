const mongoose=require('mongoose');
const { Schema } = mongoose;

const OrderSchema= new Schema({
   shopid:{
     required:true,
      type:String
   },
  productid:{
    unique:true,
    type:String
  },
  price:{
    type:String
  },
  address:{
    required:true,
    type:String
  },
})
mongoose.models={}
module.exports = OrderSchema
