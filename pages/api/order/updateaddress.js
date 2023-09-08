import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import CustomerSchema from '../../../Backend/Schemas/CustomerSchema'
import mongoose from 'mongoose'
let jwt = require('jsonwebtoken');

const Customer = mongoose.model('Customer', CustomerSchema)

export default async function handler(req, res) {
  if (req.method === "POST") {
    try{
      let db = await connectToMongo()
    console.log(req.body.token)
    let result= await jwt.verify(req.body.token,process.env['JWT_TOKEN'])
    let customers= await Customer.find({mobile:result.mobile})
    if(customers.length!=0){
      let newUser= await Customer.findOneAndUpdate({mobile:result.mobile},{address:JSON.stringify(req.body.data)})
      res.json({status:'ok',alert:'Address Updated Successfully ',newUser})
    }
    else{
      res.json({status:'404',alert:"Address Couldn't be Updated "})
      
    }

    }
    catch{
      res.json({alert:"Address Couldn't be Updated"})
    }
  }
}