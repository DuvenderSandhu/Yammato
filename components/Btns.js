import Link from 'next/link'
function Btns() {
  return (
    <>
      <div className="my-8 flex justify-center items-center flex-col">
        <h1 className="font-bold text-2xl">Order Your Food to your Doorstep</h1>
        <div className="m-4">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link href="/order">Find Your Product</Link></button>
          <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link href="/login">Login/Signup</Link></button>

        </div>
      </div>
    </>
  )
}
export default Btns