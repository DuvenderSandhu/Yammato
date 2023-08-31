import Siderbar from '../components/Siderbar'
import Exploreshops from '../components/Exploreshops'
function Order(props) {
  return (
    <>
      <Siderbar />
      <Exploreshops data={props.data}/>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  let response = await fetch(`https://yammato.moviesmovies.repl.co/api/orders`)
  let data= await response.json()
  console.log(response)
  return { props: { data :data} }
}


export default Order