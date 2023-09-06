import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import CustomerSchema from '../../../Backend/Schemas/CustomerSchema'
import mongoose from 'mongoose'
let jwt = require('jsonwebtoken');

const Customer= mongoose.model('Customer', CustomerSchema)

export default async function handler(req, res) {
if(req.method==="POST"){
  let db=await connectToMongo()
  // let result = await Customer.find()
  let ok=jwt.verify(req.body.token,process.env['JWT_TOKEN'])
  res.json(ok)
}
}