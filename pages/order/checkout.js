import Stripe from 'stripe';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState,useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

function Checkout(){
  let stripe= Stripe('sk_test_tR3PYbcVNZZ796tH88S4VQ2u')
  const router= useRouter()
  const [subtotal,setsubtotal]=useState(0)
  const dispatch= useDispatch()
  let cart = useSelector(state => state.addcart)
  let user = useSelector(state => state.user)
  console.log(cart)
async function InitiatePayment(){

const paymentIntent = await stripe.paymentIntents.create({
  amount: 500,
  currency: 'gbp',
  payment_method: 'pm_card_us',
});
  console.log(paymentIntent)
}
  return (
    <>
         {user?<>
         <section class="text-gray-600 body-font">
  <div class="container px-5 py-5 mx-auto">
    <div class="flex flex-wrap -mx-4 -my-8 gap-2 justify-between">
      {cart.map((e,i)=>{
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