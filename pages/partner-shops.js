import Shopareas from '../components/Shopareas'
import connectToMongo from '../Backend/Middlewares/connectToMongo'
import mongoose from 'mongoose'
import ShopSchema from '../Backend/Schemas/ShopSchema'
const Shop = mongoose.model('Shop', ShopSchema)

function Shops(props) {
  
  return (
    <>
    <Shopareas data={props.data}/>
    </>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  let response = await fetch(`https://yammato.moviesmovies.repl.co/api/orders`)
  let data= await response.json()
  return { props: { data :data} }
}

export default Shops