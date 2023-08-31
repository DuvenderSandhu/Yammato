import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '../state/index'

function Shopreg() {
  const router = useRouter()
  const [shopname, setshopname] = useState("");
  const [pincode, setpincode] = useState("");
  const dispatch= useDispatch()
  async function ClickBtn(e){
  e.preventDefault()
  if(shopname && pincode){

  let response = await fetch(`https://yammato.moviesmovies.repl.co/api/partner/shopid`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({pincode:pincode,shopname:shopname})
  })
  let data= await response.json()
  localStorage.setItem("shopid",data)
  localStorage.setItem("shopname",shopname)
   router.push("/partner/register")
}
  else{
    dispatch(actionCreators.showError("Some Values are Empty"))
    
  }
  }
  return (
    <>
      <h1 className="font-bold text-2xl m-8 text-center">Partner Your Shop with us</h1>

      <div className=" flex justify-center">


        <form className="flex flex-col justify-center w-[400px]">
          <div class="container mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shop Name</label>
            <input type="text" onChange={(e)=> setshopname(e.target.value)} id="email" class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Shop Name" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pin Code</label>
            <input type="number" maxLength={6} onChange={(e)=> setpincode(e.target.value)} id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

          {/* <Link href="/partner/register"> */}
          <button type="submit" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" onClick={ClickBtn}>Generate SHOP ID</button>

<label for="terms" class="ml-2 m-2 text-center  text-sm font-medium text-gray-900 dark:text-gray-300">Already partner <Link href="/partner/login"><span  class="text-blue-600 cursor-pointer hover:underline dark:text-blue-500">Login </span></Link></label>
          {/* </Link> */}
        </form>

      </div>
    </>
  )
}

export default Shopreg