import { useRouter } from 'next/router'

function ShopProfile(props){
   const router = useRouter()
  const id=router.query.shopid
  return (
    <>
    <div className="flex justify-center">
        <figure class="max-w-[55%] ">
          <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1602400236316-f5e3b6d2314c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWNkb25hbGRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="image description" />
          <h1 className="font-bold text-4xl m-4 text-center">{id} </h1>

        </figure>
      </div>
    </>
  )
}
export default ShopProfile