import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '../state/index'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { MdOutlineHourglassEmpty } from 'react-icons/md'
import Link from "next/link"
function Carts(props) {
  const dispatch= useDispatch()
  let cart = useSelector(state => state.addcart)
  function HandleRemove(a){
  let newcart= cart
  newcart.pop(a)
  dispatch(actionCreators.addCart(newcart));
  dispatch(actionCreators.showSuccess("Item Removed From Cart"))
  }
  // console.log(cart)
  return (
    <div className={`${props.state} transition  ease-in-out duration-1000 justify-end bg-white `}>
      <ol class="absolute overflow-auto w-56 text-sm font-medium text-gray-900 bg-white border border-gray-200  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {
      cart.length!=0?cart.map((e,i) => {
          return (<>
          <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-pointer">
            <IoMdRemoveCircleOutline className="absolute left-2/3 text-xl cursor-pointer" onClick={HandleRemove} />
            <p className="font-bold text-lg text-justify">{e.productname}</p>
            <p className="font-bold text-md">Price</p>
            <p>₹ {e.price}</p>

          </li>
              
          </>
                 
                 )
        }):(
        <div className="p-4 flex flex-col justify-center items-center ">
        <h1 className="font-bold text-center text-lg my-2">Your Cart is Empty Kindly Add Some to Order</h1>
        <MdOutlineHourglassEmpty className="text-4xl text-center"/>
        </div>)}
        {cart.length!=0?<p class=" cursor-pointer m-0 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" ><Link href="/order/checkout">Checkout</Link></p>:""}
        {/* <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-pointer">
          <IoMdRemoveCircleOutline className="absolute left-2/3 text-xl cursor-pointer"/>
          <p className="font-bold text-lg text-justify">Item Name</p>
          <p className="font-bold text-md">Price</p>
          <p>Quantity</p>
        </li> */}
        {/* <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    <li class="w-full px-4 py-2 rounded-b-lg">Download</li> */}
      </ol>
    </div>
  )
}

export default Carts