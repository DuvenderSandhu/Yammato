import connectToMongo from '../../../Backend/Middlewares/connectToMongo'
import ShopSchema from '../../../Backend/Schemas/ShopSchema'
import mongoose from 'mongoose'
const Shop= mongoose.model('Shop', ShopSchema)

export default function handler(req, res) {
  try{
    let value=connectToMongo()
    function genShopId() {
          let shopid="YUM";
          if(req.body.pincode.length===6){
              let pinid= req.body.pincode.substring(1, req.body.pincode.length)
              shopid=shopid+pinid+parseInt(Math.random()*10000)

          }
          return shopid
      }
       async function Loop(){
          let i=0;
      while (i<=1000){
          let shopid= genShopId()
        try{
          let result = await Shop.find({shopID:shopid})
          console.log(i)
          if(result.length===0){
              res.json(shopid)
              break;
          }
        }
        catch{
          res.json({status:"404",alert:"Couldn't Process Due to Server Error"})
        }

      }
        }
    Loop()
  }
  catch{
    res.json({status:"404",alert:"Couldn't Login Due to Server Error"})

  }
}