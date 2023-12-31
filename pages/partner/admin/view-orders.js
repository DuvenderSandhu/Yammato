import Breadcrumb from '../../../components/Breadcrumb'
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useRouter} from 'next/router'
function View(){
  const [data,setData]=useState([])
  const router= useRouter()
  let user = useSelector(state => state.user)
  async function getData(){
    let res=await fetch('https://yammato.moviesmovies.repl.co/api/partner/orders/',{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({shopid:user})
  })
  let data= await res.json()
  setData(data)
  }
  useEffect(()=>{
    getData().then()
  },[])
    return (
      <>
        <Breadcrumb/>
      <h1 className="font-bold text-2xl m-8 text-center">Your Orders</h1>
      <div className="flex gap-4 flex-wrap">
        {data!=0?data.map((e)=>{
        return (
          <div class="w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div >
            <img class="rounded-t-lg" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div class="p-5">
          <h1 className="font-bold text-lg">{e._id}</h1>
          <p className="font-medium">Contains {e.productid.length} Products</p>
          <p className="text-red-900 font-bold"> {e.status}</p>
            <div >
              <p class="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{
            router.push(`/partner/admin/view-orders/${e._id}`)
              }} >
                Update

              </p></div>
          </div>
        </div>
        )
        }):<h1 className="font-bold w-full text-xl m-8 text-center">No Product Found Yet :(</h1>}
      </div>
      </>
    )
}



export default View