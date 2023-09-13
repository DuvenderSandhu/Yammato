import Productareas from '../components/Productareas'
import React, { useState,useEffect } from 'react';
import actionCreators from '../state/index'
import { useDispatch, useSelector } from 'react-redux';
import {useRouter} from 'next/router'
function MyOrder(){
    const router = useRouter()
  const dispatch= useDispatch()
  const user= useSelector(state=>state.user)
  const [data,setData]=useState([])
  async function getData(){
    let result= await fetch('https://yammato.moviesmovies.repl.co/api/order/orders',{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({token:user})
  })
  let data= await result.json()
   setData(data)
    console.log(data)
  }
  useEffect(()=>{
    getData().then()
  },[])
  return (
    <>
   <h1 className="font-bold text-2xl m-8 text-center">My Orders </h1>
      <div className="flex gap-4 flex-wrap">

        {data!=0?data.map((e)=>{
        return (
          <div class="w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div >
            <img class="rounded-t-lg" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div class="p-5">
          <h1>{e.itemsName}</h1>
            <div >
              <h1 className="font-bold text-lg">{e.itemsName}</h1>
          <p className="font-bold">#{e._id}</p>
          <p className="text-red-900 font-bold">Order status: {e.status}</p>
              {e.status==="Accept"?<p className="text-black font-medium">You Will Receive it Soon</p>:""}
              </div>
          </div>
        </div>
        )
        }):<h1 className="font-bold w-full text-xl m-8 text-center">No Product Found Yet :(</h1>}
      </div>

    </>
  )
}


export default MyOrder