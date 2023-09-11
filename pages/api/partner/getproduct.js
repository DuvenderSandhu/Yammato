import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import OrderSchema from '../../../Backend/Schemas/OrderSchema'
const Order= mongoose.model('Order', OrderSchema)
import FoodSchema from '../../../Backend/Schemas/FoodSchema'
const Food= mongoose.model('Food', FoodSchema)
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
export default async function handler(req, res) {
if (req.method === 'POST') {
  let db= await connectToMongo()
  console.log(req.body)
  console.log(req.body.orderid)
  let orders= await Order.find({_id:req.body.orderid})
  let sendorder= []
  let token = await jwt.verify(req.body.token,process.env.JWT_TOKEN)
  
  await orders[0].shopid.map(async (e,i)=>{
    if(e===token.shopid){
      await sendorder.push(orders[0].productid[i])
    }
  })
  console.log("Hi")
  let details=[]
  await Promise.all(
   sendorder.map(async (e)=>{
     
  let products= await Food.find({_id:e})
  details.push(products[0])    
  }))
  console.log(details)
  res.send(details)
}
else{
  let db= await connectToMongo()
  let orders= await Order.find()
  res.json(orders)
  
}
}