import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import FoodSchema from '../../../Backend/Schemas/FoodSchema'
import mongoose from 'mongoose'
const Food= mongoose.model('Food', FoodSchema)
import bcrypt from 'bcryptjs'
let jwt = require('jsonwebtoken');

export default async function handler(req, res) {
  if (req.method === 'POST') {
  let value=await connectToMongo()
try{
  let data= await Food.create({
    shopID:await jwt.verify(req.body.token,process.env.JWT_TOKEN).shopid,    
    itemsName:req.body.itemname,
    type:req.body.type.split(','),
    price:req.body.price,
    quantity:req.body.qty,
    ItemDesc: req.body.Itemdesc,
  })
    data= 
    res.json(data)
}
    catch(e){
      console.log(e)
      res.json({status:"404",alert:"Something Went Wrong"})
    }
    
}}