import { useRouter } from 'next/router'
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '../../state/index'
import Link from 'next/link'
function Shopsignup(){
  const dispatch= useDispatch()
  // let cart = useSelector(state => state.addcart)
  
  async function ClickBtn(e){
  e.preventDefault()
  if(shopid && ownername  && shopdesc && address&& mobile && password && type){
    let response = await fetch(`https://yammato.moviesmovies.repl.co/api/partner/shopreg`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({shopid:shopid,shopname:shopname,ownername:ownername,shopdesc:shopdesc,address:address,mobile:mobile,password:password,type:type})
  })
  let data= await response.json()
    if(data.status==="ok"){
  dispatch(actionCreators.showSuccess(data.alert))
   router.push("/partner/login")
      console.log(data)
    }
    else{
    dispatch(actionCreators.showError(data.alert))
      console.log(data)
    }
    
  }
  else{
    dispatch(actionCreators.showError("Some Values are Empty"))
    
  }
}
  const [ownername, setownername] = useState("");
  const [gstin, setgstin] = useState("");
  const [shopdesc, setshopdesc] = useState("");
  const [address, setaddress] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [type, settype] = useState("");
  const router=useRouter()
        const [shopid, setshopid] = useState("");
  const [shopname, setshopname] = useState("");
  setTimeout(()=>{
    if (typeof window !== 'undefined') {
      setshopid(localStorage.getItem('shopid'))
      setshopname(localStorage.getItem('shopname'))
    }
    
  },1000)
  return (
<>
        <h1 className="font-bold text-2xl m-8 text-center">Partner Your Shop with us</h1>

      <div className=" flex justify-center">


        <form className="flex flex-col justify-center w-[400px]">
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Shop ID</label>
            <input readOnly={true} value={shopid} type="text" id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Owner Name</label>
            <input onChange={(e)=>setownername(e.target.value)} type="text" id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          {/* <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >GSTIN (If Any)</label>
            <input type="text" onChange={(e)=>setgstin(e.target.value)} id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
          </div> */}
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shop Desc</label>
            <input onChange={(e)=>setshopdesc(e.target.value)} type="text"  id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
            <input type="text" onChange={(e)=>setaddress(e.target.value)} id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
            <input type="number" onChange={(e)=>setmobile(e.target.value)}  maxLength="10" id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" onChange={(e)=>setpassword(e.target.value)}  id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
            <input type="text"  id="password" onChange={(e)=>settype(e.target.value)} class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          {/* <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Shop Images</label>
            <input type="file" multiple="true" id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
          </div> */}

          {/* <Link href="/partner/login"> */}
          <button onClick={ClickBtn} class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Create Your Digital Shop</button>
          {/* </Link> */}
        </form>

      </div>
</>   
  )
}


export default Shopsignup

