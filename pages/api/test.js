import connectToMongo from '../../Backend/Middlewares/connectToMongo'

export default async function handler(req, res) {
  let value=await connectToMongo()
  res.send("Hello")
}