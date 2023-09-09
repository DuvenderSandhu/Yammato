import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import OrderSchema from '../../../Backend/Schemas/OrderSchema'
import mongoose from 'mongoose'
const Order= mongoose.model('Order', OrderSchema)
import jwt from 'jsonwebtoken'
export default async function handler(req, res) {
  if(req.method==="POST"){
    let db= await connectToMongo()
        let token= await jwt.verify(req.body.token,process.env.JWT_TOKEN)
    let result= await Order.find({user:token.mobile}).select(['-user'])
    console.log(result)
    res.json(result)
  }
  // else{
  //   res.send("Invalid method")
    
  // }
}