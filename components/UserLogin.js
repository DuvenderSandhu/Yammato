import Link from 'next/link'
function UserLogin(props) {
  return (
    <div className={`${props.state}  justify-end bg-white`}>
      <ol class="absolute  w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <Link href="/login">
        <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-pointer">
          <p className="font-bold text-md text-justify">Login</p>
        </li>
        </Link>
        <Link href="/signup">
        <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-pointer">
          <p className="font-bold text-md text-justify">Signup</p>
        </li>
        </Link>
        {/* <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    <li class="w-full px-4 py-2 rounded-b-lg">Download</li> */}
      </ol>
    </div>
  )
}

export default UserLogin