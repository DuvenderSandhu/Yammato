import div from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '../state/index'
import React, { useEffect } from 'react';
import { useRouter } from 'next/router'

function Productareas(props) {
  const dispatch = useDispatch();
  let cart = useSelector(state => state.addcart)
  let user = useSelector(state => state.user)
  const router=useRouter()
  function AddProduct(e) {
    dispatch(actionCreators.addCart(cart.push("Hi")));
    dispatch(actionCreators.showSuccess("Item Called Hi Added to Cart"))
  }

  return (
    <>
      <h1 className="font-bold text-2xl m-8 text-center">Products from {router.query.shopid}</h1>
      <div className="flex gap-4 flex-wrap">

        {props.data!=0?props.data.map((e)=>{
        return (
          <div class="w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div onClick={AddProduct}>
            <img class="rounded-t-lg" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div class="p-5">
          <h1>{e.itemsName}</h1>
          <p>₹ {e.price}</p>
            <div onClick={()=>{
if(user){
  let data={
  shopid:user,
  productid:e._id,
  price:e.price,
  productname:e.itemsName,
};
            console.log(data);
            dispatch(actionCreators.addCart(cart.push(data)));
    dispatch(actionCreators.showSuccess(e.itemsName+" Added to Cart"))
}
else{
  router.push('/login')
}
            
            }}>
              <p class="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                Add

              </p></div>
          </div>
        </div>
        )
        }):<h1 className="font-bold w-full text-xl m-8 text-center">No Product Found Yet :(</h1>}
      </div>

    </>
  )
}
export default Productareas