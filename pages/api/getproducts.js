import connectToMongo from '../../Backend/Middlewares/connectToMongo'
import FoodSchema from '../../Backend/Schemas/FoodSchema'
import mongoose from 'mongoose'
const Food= mongoose.model('Food', FoodSchema)
let jwt = require('jsonwebtoken');

export default async function handler(req, res) {
if (req.method === 'POST') {
  let value=await connectToMongo()
  let data= await Food.find({shopID:req.body.shopid})
  if(data.length!=0){
    res.json(data)
  }
  else{
try{
  data= await Food.find({shopID:await jwt.verify(req.body.shopid,process.env.JWT_TOKEN).shopid})
  res.json(data)
}
catch{
  res.json([])
}
    // let token= await jwt.verify(req.body.shopid,process.env.JWT_TOKEN).shopid
  }
}
}