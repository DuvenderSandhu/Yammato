import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import ShopSchema from '../../../Backend/Schemas/ShopSchema'
import mongoose from 'mongoose'
const Shop= mongoose.model('Shop', ShopSchema)
import bcrypt from 'bcryptjs'
let jwt = require('jsonwebtoken');

export default async function handler(req, res) {
if (req.method === 'POST') {
  
  try{
    let value=await connectToMongo()
    let shops=await Shop.find({shopID:req.body.shopid}).select(["-password","-mobile"])
    if(shops.length!=0){
    let shop=await Shop.find({shopID:req.body.shopid}).select(["-mobile"])
    let login=await bcrypt.compare(req.body.password,shop[0].password)
    // res.json(login)
      if(login){
        let data={
          shopid:shops[0].shopID
        }
        let token= await jwt.sign(data,process.env.JWT_TOKEN)
        res.json({status:"ok",token:token,alert:"Partner Logged In"})
      }
      else{
      res.json({status:"404",alert:"Invalid Credentials"})
      }

    }
    else{
      res.json({alert:"Invalid Credentials"})
    }
  }
  catch{
    res.json({status:"404",alert:"Couldn't Login Due to Server Error"})

  }
}
  else{
    
  res.send("Invalid Method")
  }
}