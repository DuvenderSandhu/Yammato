import { useRouter } from 'next/router'
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Product(){
  const router=useRouter()
  const product= router.query.product
  const user= useSelector(state=>state.user)
  async function getData(){
    const res = await fetch(`https://yammato.moviesmovies.repl.co/api/partner/getproduct`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({orderid:product,token:user})
  })
  const data = await res.json()
    console.log(data)
  }
  useEffect(()=>{
    console.log(product)
    console.log(user)
    getData().then()
  },[])
  return (
    <>
    <h1>Hello {product}</h1>
    </>
  )
}

export default Product