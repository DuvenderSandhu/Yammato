import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '../state/index'
function Login() {
                       async function HandleClick(e){
  e.preventDefault()
  let res= await fetch("https://yammato.moviesmovies.repl.co/api/login",{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({mobile:username,password:password})
  })
  let data= await res.json()
  if(data.status==="ok"){
    dispatch(actionCreators.showSuccess(data.alert))
  dispatch(actionCreators.LoggedUser(data.token))
  localStorage.setItem('token',data.token)
   router.push("/order")
  }
  else{
    dispatch(actionCreators.showError(data.alert))
  }
}
  const dispatch = useDispatch()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  return (
    <>
      <h1 className="font-bold text-2xl m-8 text-center">Welcome Back </h1>

      <div className=" flex justify-center">


        <form className="flex flex-col justify-center w-[400px]">
          <div class="container mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number/Email</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} id="email" class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Number/Email" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

          <button onClick={HandleClick} class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Login</button>
        </form>

      </div>
    </>
  )
}

export default Login