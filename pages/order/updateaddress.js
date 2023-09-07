import UpdateAddress from '../../components/UpdateAddress'
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '../../state/index'

function Address(props){
  return (
    <>
    <UpdateAddress />
    </>
  )
}

// export async function getServerSideProps() {
//   // Fetch data from external API
 
 
//   // Pass data to the page via props
//   return { props: { data } }
// }

export default Address