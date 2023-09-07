import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import CustomerSchema from '../../../Backend/Schemas/CustomerSchema'
import mongoose from 'mongoose'
let jwt = require('jsonwebtoken');

const Customer = mongoose.model('Customer', CustomerSchema)

export default async function handler(req, res) {
  if (req.method === "POST") {
    let db = await connectToMongo()
    console.log(req.body.token)
    try{
      let ok = await jwt.verify(req.body.token, process.env.JWT_TOKEN)
    let customers=await Customer.find({mobile:ok.mobile}).select(['-mobile','-email','-password'])
    if(customers.length!=0){
    res.json({address:customers[0].address})
      
    }
    }
    catch{
      res.json({status:"404",alert:"Address Couldn't Be Retrive"})
    }
  }
}