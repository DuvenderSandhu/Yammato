import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import OrderSchema from '../../../Backend/Schemas/OrderSchema'
import mongoose from 'mongoose'
const Order= mongoose.model('Order', OrderSchema)

export default async function handler(req, res) {
if(req.method==="POST"){
  let db= connectToMongo()
    console.log(req.body.token)
  try{
    let result= await Order.create({shopid:req.body.token,productid:req.body.productid,paymentid:req.body.paymentid,price:req.body.price,address:req.body.address})
    res.json(result)
  }
  catch(e){
    console.log(e)
    res.json({alert:"Order Couldn't be Completed Kindly Contact Customer Support",error:e})
  }
  // res.json(result)
}
  else{
    let result= await Order.find()
    res.json({result})
    // res.send("NO pOST")
  }
}