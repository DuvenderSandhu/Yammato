import { useRouter } from 'next/router'
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../../../components/Breadcrumb'

function Product(){
  const router=useRouter()
  const product= router.query.product
  const user= useSelector(state=>state.user)
  const [result,setResult]=useState([])
  const [status,setStatus]=useState("")
  async function HandleStatus(item,status){
    let data=await fetch('https://yammato.moviesmovies.repl.co/api/partner/changestatus',{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({status:status,item:item,})
    })
    let response= await data.json()
    console.log(response)
  }
    
  
  function HandleDecline(){
    setStatus("Decline")
    
    
  }
  async function getData(){
    const res = await fetch(`https://yammato.moviesmovies.repl.co/api/partner/getproduct`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({orderid:product,token:user})
  })
  const data = await res.json()
    setResult(data)
  }
  useEffect(()=>{
    console.log(product)
    console.log(user)
    getData().then()
  },[])
  return (
    <>
      <Breadcrumb/>

            <h1 className="font-bold text-2xl m-8 text-center">OrderNo.: {product}</h1>
      <div className=" flex gap-4">

      {result!=0?result.map((e)=>{
        return (
          <div class="w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div >
            <img class="rounded-t-lg" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
            {console.log(e)}
          <div class="p-5">
          <h1 className="font-bold text-lg">{e.itemsName}</h1>
          <p className="font-medium">{e._id}</p>
          <p className="text-red-900 font-bold">Pending {e.quantity} Qty</p>
            <div className="flex justify-between flex-wrap">
            <div >
              <p class="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{HandleStatus(product,"Accept")}}>
                Accept

              </p></div>
            <div >
              <p class="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white focus:outline-none text-white bg-red-700  rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=>{HandleStatus(product,"Decline")}}>
                Decline

              </p></div>
           </div>
          </div>
        </div>
        )
        }):<h1 className="font-bold w-full text-xl m-8 text-center">No Product Found Yet :(</h1>}
        </div>
    </>
  )
}

export default Product