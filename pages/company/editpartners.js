import CDashBoard from '../../components/CDashBoard';
import CBreadCrumbs from '../../components/CBreadCrumbs';
function Dashboard(){
  return (
    <>
    <CBreadCrumbs/>
      <h1 className="font-bold text-2xl m-8 text-center">Edit Partners </h1>
      <div className="flex gap-4 flex-wrap">
          <div class="w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div >
            <img class="rounded-t-lg" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div class="p-5">
          <h1>e.itemsName</h1>
          <p>₹ e.price</p>
            <div >
              <p class="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                Add

              </p></div>
          </div>
          </div>
          </div>

    </>
  )
}

export default Dashboard