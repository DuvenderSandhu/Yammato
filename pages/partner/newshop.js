import Shopreg from '../../components/Shopreg'


function Reg(props){
  return (
    <>
    <Shopreg/>
    
    </>
  )
}
// export async function getServerSideProps() {
//   await connectToMongo()
//   let response = await fetch(`https://yammato.moviesmovies.repl.co/api/shopid`,{
//     method:"POST",
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: {pincode:"175106",shopname:"ALMA"}
//   })
//   let data= await response.json()
//   return { props: { data :data} }
// }

export default Reg
// https://yammato.moviesmovies.repl.co/api/shopid