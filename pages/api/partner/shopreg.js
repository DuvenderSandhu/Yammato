import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import ShopSchema from '../../../Backend/Schemas/ShopSchema'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const Shop= mongoose.model('Shop', ShopSchema)

export default async function handler(req, res) {
if (req.method === 'POST') {
try{
    let value=await connectToMongo()
  let obj=await Shop.create({
    shopID:req.body.shopid,
    shopName:req.body.shopname,
    ownerName:req.body.ownername,
    // images:req,
    GSTIN: req.body.gstin |"",
    shopDesc: req.body.shopdesc,
    address: req.body.address,
    mobile:req.body.mobile,
    password:await bcrypt.hash(req.body.password, await bcrypt.genSalt(10)),
    type:req.body.type,
    
  })
  console.log(obj)
    res.json({status:"ok",alert:"Shop Registrated Successfully"})
      
    
}
  catch(e){
    res.json({status:"error",alert:"Some Error Occured",e})
    
    }
}
else if (req.method === 'GET') {
res.send("GET Method")
}
}