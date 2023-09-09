import Stripe from 'stripe';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState,useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { loadStripe } from '@stripe/stripe-js';
import Head from 'next/head'
import actionCreators from '../../state/index'

function Checkout(){

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  const router= useRouter()
  const [subtotal,setsubtotal]=useState(500)
  const [products,setproducts]=useState([])
  const dispatch= useDispatch()
  let cart = useSelector(state => state.addcart)
  let user = useSelector(state => state.user)
  
  console.log(cart)
  const stripe= Stripe('sk_test_tR3PYbcVNZZ796tH88S4VQ2u')
async function InitiatePayment(){

try{
  let paymentIntent = await stripe.paymentIntents.create({
  amount: subtotal,
  currency: 'gbp',
  payment_method: 'pm_card_us',
});
  let data= {
    productid:cart.map((e)=>e.productid),
    paymentid:paymentIntent.id,
    token:user,
    shopid:"SHopid",
    price:`${subtotal}`
  }
  let result= await fetch('https://yammato.moviesmovies.repl.co/api/order/checkout',{
     method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data)
  })
  let output= await result.json()
  console.log(output)
dispatch(actionCreators.showSuccess("Payment of 500 Done Successfully"))
  router.push('/order/updateaddress')
  // console.log(output)
}
  catch{
dispatch(actionCreators.showError("Payment Failed"))
    
  }
}
  return (
    <>
         {user?<>
         <section class="text-gray-600 body-font">
  <div class="container px-5 py-5 mx-auto">
    <div class="flex flex-wrap -mx-4 -my-8 gap-2 justify-between">
      {cart.map((e,i)=>{
      // products.push(e.productid)
      // console.log(e.productid)
      return (
        <>
        <div class="py-4 px-2 lg:w-1/5 border ">
        <div class="h-full flex items-start">
          <div class="w-4  flex-shrink-0 flex flex-col text-center leading-none items-center">
           
            <span class="font-medium  text-blue-500 text-lg text-gray-800 title-font leading-none">{i+1}</span>
          </div>
          <div class="flex-grow pl-6">
            
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">{e.productname}</h1>
            <p class="leading-relaxed mb-5 text-justify">{e.productdesc.length>75?e.productdesc.substr(0,75)+"...":e.productdesc}</p>
            <p class="leading-relaxed mb-5 font-bold">₹ {e.price}</p>
            
          </div>
        </div>
      </div>
        </>
      )
      })}
    </div>
  </div>
      <div className="container flex justify-center">
      <p class=" cursor-pointer text-center w-2/12 m-0 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={InitiatePayment} ><Link href="/order/checkout">Pay Now</Link></p>
      </div>
</section></>:"Sorry"}
        
    </>
  )
}

export default Checkout