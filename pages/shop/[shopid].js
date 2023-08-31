import ShopProfile from "../../components/ShopProfile"
import Productareas from '../../components/Productareas'
import { useRouter } from 'next/router'

function Shopid(props) {
  const router=useRouter()
 
  return (
    <>
      <ShopProfile />
      <Productareas data={props.data} />
    </>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://yammato.moviesmovies.repl.co/api/getproducts`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(context.query)
  })
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}
export default Shopid