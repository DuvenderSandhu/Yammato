import connectToMongo from '../../Backend/Middlewares/connectToMongo'
import OrderSchema from '../../Backend/Schemas/OrderSchema'
import FoodSchema from '../../Backend/Schemas/FoodSchema'
import mongoose from 'mongoose'
const Order= mongoose.model('Order', OrderSchema)
const Food= mongoose.model('Food', FoodSchema)
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
  let value=await connectToMongo()
  let db= await Order.find()
  // let shopid=["64fd5dc00b00371581d10dd4","64fd5db30b00371581d10dd2"]
    res.json(db)
}