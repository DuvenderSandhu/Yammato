import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '../state/index'

function UpdateAddress(props){
  const user= useSelector(state => state.user)
  
     
  // const data = await res.json()
  //   console.log(data)

  const dispatch=useDispatch()

const [building, setBuilding] = useState("");
const [fetchData, setFetchData] = useState({
  building:"1",
  area:"2",
  landmark:"3",
  city:"4",
  state:"State",
  pin:"Code"
});

const [area, setArea] = useState("");
const [landmark, setLandmark] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [pin, setPin] = useState("");
  const router=useRouter()
  const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];
  
  async function ClickBtn(e){
  console.log("clicked")
  }
  async function GetData(){
    const res =  await fetch(`https://yammato.moviesmovies.repl.co/api/order/address`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({token:user})
  })
    let data=await res.json()
    setFetchData(data)
    console.log(data)
  }

  // GetData()
  useEffect(()=>{
    // GetData()
  },[])

  return (
    <>
     <h1 className="font-bold text-2xl m-8 text-center">Address Information  </h1>

      <div className=" flex justify-center">


        <form className="flex flex-col justify-center w-[400px]">
          <div class="container mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Flat, House no., Building, Company, Apartment</label>
            <input onChange={(e)=>setBuilding(e.target.value)} type="text" id="email" class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Number/Email" required />
          </div>
          
          <div class="container mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area, Street, Sector, Village</label>
            <input type="text" onChange={(e)=>setArea(e.target.value)} id="email" class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Number/Email" required />
          </div>
          <div class="container mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Landmark</label>
            <input type="text" onChange={(e)=>setLandmark(e.target.value)} id="email" class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Number/Email" required />
          </div>
          
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Town/City</label>
            <input type="text" onChange={(e)=>setCity(e.target.value)} id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
            <select type="text" onChange={(e)=>setState(e.target.value)} id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 cursor-pointer dark:focus:border-blue-500" required> 
              {indianStates.map((e)=><option>{e}</option>)}          
</select>
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pin Code</label>
            <input type="number" maxlength={6} onChange={(e)=>setPin(e.target.value)} id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>


          <button onClick={ClickBtn} class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Continue</button>
        </form>

      </div>
    </>
  )
}

export default UpdateAddress
