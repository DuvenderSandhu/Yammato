import connectToMongo from '../../Backend/Middlewares/connectToMongo'
import ShopSchema from '../../Backend/Schemas/ShopSchema'
import mongoose from 'mongoose'
const Shop= mongoose.model('Shop', ShopSchema)
export default function handler(req, res) {
  let value=connectToMongo()
  Shop.find().then(data=>res.send(data)).catch(err=>res.send(err))
}