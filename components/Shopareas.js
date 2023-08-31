import Link from 'next/link'
function Shopareas(props) {
  return (
    
    <>
      <h1 className="font-bold text-2xl m-8 text-center">Partner Shops</h1>
      <div className="flex gap-4 flex-wrap">
        {props.data.length!=0?props.data.map((e)=>{
      return <div class="w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href="/">
        <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1602400236316-f5e3b6d2314c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWNkb25hbGRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
    </Link>
    <div class="p-5">
        
        <div  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <Link href={"/shop/"+e.shopID}>{e.shopName}</Link>
             
        </div>
    </div>
</div>
        })
        :<h1 className="font-bold text-2xl m-8 text-center w-full">No Shop Found Yet</h1>}
        
        

      </div>

    </>
  )
}
export default Shopareas