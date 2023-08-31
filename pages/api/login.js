import connectToMongo from '../../Backend/Middlewares/connectToMongo'
import CustomerSchema from '../../Backend/Schemas/CustomerSchema'
import mongoose from 'mongoose'
const Customer= mongoose.model('Customer', CustomerSchema)
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
  if (req.method === 'POST') {
 try{
    let value= await connectToMongo()
  let customer= await Customer.find({mobile:req.body.mobile}).select(["-password"])
  if(customer.length!=0){
  let customer= await Customer.find({mobile:req.body.mobile})
  let result= await bcrypt.compare(req.body.password,customer[0].password)
  if(result){
    let data={
      mobile:customer[0].mobile
    }
    let token= await jwt.sign(data,process.env.JWT_TOKEN)
  res.json({status:"ok",alert:"User Logged In ",token:token})
  }
  else{
    res.json({status:"404",alert:"Invalid Credentials"})
  }
    
  }
   else{
  res.json({status:"404",alert:"Invalid Credentials"})
     
   }
 }
    catch(e){
  res.json({status:"404",alert:"Something Went Wrong",error:e})
      
    }
  }
}