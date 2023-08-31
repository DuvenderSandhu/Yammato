import connectToMongo from '../../Backend/Middlewares/connectToMongo'
import CustomerSchema from '../../Backend/Schemas/CustomerSchema'
import mongoose from 'mongoose'
const Customer= mongoose.model('Customer', CustomerSchema)
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  if (req.method === 'POST') {
 try{
    let value= await connectToMongo()
  let customer= await Customer.create({name:req.body.name,email:req.body.email,mobile:req.body.mobile,password:await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))})
  res.json({status:"ok",alert:"User Created"})
 }
    catch(e){
      console.log(e)
  res.json({status:"404",alert:"Something Went Wrong",error:e})
      
    }
  }
}