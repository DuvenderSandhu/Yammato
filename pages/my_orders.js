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
            <div onClick={()=>{
if(user){
    dispatch(actionCreators.showSuccess("Good To Go"))
   
}
else{
    dispatch(actionCreators.showError("User can Only use Cart after Login"))
  
  router.push('/login')
}
            
            }}>
              <p class="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                Get Info

              </p></div>
          </div>
        </div>
        )
        }):<h1 className="font-bold w-full text-xl m-8 text-center">No Product Found Yet :(</h1>}
      </div>

    </>
  )
}


export default MyOrder