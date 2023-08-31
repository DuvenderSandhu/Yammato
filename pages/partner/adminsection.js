import { useEffect ,useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '../../state/index'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Breadcrumb from '../../components/Breadcrumb'

function AddProducts(){
  const router=useRouter()
  
  const dispatch= useDispatch()
  const [products, setProducts] = useState("");
  let user = useSelector(state => state.user)
  async function FetchData(){
    let data=await fetch('https://yammato.moviesmovies.repl.co/api/getproducts',{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({shopid:user})
    })
    let response= await data.json()
    console.log(user)
    setProducts(response)
  }
  useEffect( ()=>{
     if(user){
       FetchData().then(data=>console.log("DOne")).catch(e=>console.log("Error"))
     }
    else{
      router.push('/partner/login')
    }
  },[])
  function AddProduct(){
    
  }
  return (
    <>
      <Breadcrumb/>
            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"><Link href="/partner/admin/registerproduct">Create New Product</Link></button>
      <div className="flex gap-4 flex-wrap">
      
      {products.length!=0?products.map((e)=>{
      return (
        <div class="w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div onClick={AddProduct}>
            <img class="rounded-t-lg" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div class="p-5">
          <h1 className="font-bold text-lg">{e.itemsName}</h1>
          <p className="font-bold">₹ {e.price}</p>
           <div className="flex justify-between flex-wrap">
            <div onClick={AddProduct}>
              <p class="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                Update

              </p></div>
            <div onClick={AddProduct}>
              <p class="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white focus:outline-none text-white bg-red-700  rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" >
                Remove

              </p></div>
           </div>
          </div>
        </div>
      )
      }):<h1 className="font-bold text-2xl m-8 text-center w-full">No Product Found </h1>}
      </div>
    </>
  )
}




export default AddProducts