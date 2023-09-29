import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import OrderSchema from '../../../Backend/Schemas/OrderSchema'
import mongoose from 'mongoose'
const Order = mongoose.model('Order', OrderSchema)
import jwt from 'jsonwebtoken'
export default async function handler(req, res) {
if (req.method === 'POST') {
  try{
    let token= await jwt.verify(req.body.shopid,process.env.JWT_TOKEN)
  console.log(token)
  let db = await connectToMongo
  let order = await Order.find({shopid:token.shopid})
  console.log(order)
  console.log(order)
  res.json(order)
  }catch{
    console.log("HI")
    res.json({order:[]})}
}
}