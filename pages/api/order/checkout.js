import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import OrderSchema from '../../../Backend/Schemas/OrderSchema'
import FoodSchema from '../../../Backend/Schemas/FoodSchema'
import mongoose from 'mongoose'
const Order= mongoose.model('Order', OrderSchema)
const Food= mongoose.model('Food', FoodSchema)
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
if(req.method==="POST"){
  let db=await connectToMongo()
    console.log(req.body.token)
  try{
    let token= await jwt.verify(req.body.token,process.env.JWT_TOKEN)
  let product= await Food.find({_id:req.body.productid})
    
    let result= await Order.create({shopid:product.map((e)=>e.shopID),productid:req.body.productid,paymentid:req.body.paymentid,price:req.body.price,address:req.body.address,user:token.mobile})
  }
  catch(e){
    console.log(e)
    res.json({alert:"Order Couldn't be Completed Kindly Contact Customer Support",error:e})
  }
  // res.json(result)
}
  else{
    let result= await Order.find()
    res.json({result})
    // res.send("NO pOST")
  }
}