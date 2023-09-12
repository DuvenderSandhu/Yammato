import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import OrderSchema from '../../../Backend/Schemas/OrderSchema'
import mongoose from 'mongoose'
const Order= mongoose.model('Order', OrderSchema)
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
if (req.method === 'POST') {
  let db= await connectToMongo()
  try{
      // let token = await jwt.verify(req.body.token,process.env.JWT_TOKEN)
      let fetchData=await Order.findOneAndUpdate({_id:req.body.item},{status:req.body.status})
      res.json({status:"ok",alert:"Status Updated"})
      
  }
  
  catch{
    res.json({status:"404",alert:"Something Went Wrong"})
  }
}
}