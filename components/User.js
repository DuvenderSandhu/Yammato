import { useDispatch, useSelector} from 'react-redux';
import actionCreators from '../state/index'
import Link from 'next/link'

function User(props){
  const dispatch=useDispatch();
  function HandleLogOut(){
  dispatch(actionCreators.LoggedUser(""))
  }
  return (
    <>
    <div className={`${props.state}  justify-end bg-white `}>
      <ol class="absolute  w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <Link href="/">
        <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-pointer">
          <p className="font-bold text-lg text-justify text-center">D Sandhu</p>
        </li>
        </Link>
        <Link href="/login">
        <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-pointer">
          <p className="font-bold text-md text-justify" onClick={HandleLogOut}>Logout</p>
        </li>
        </Link>

      </ol>
    </div>
    </>
  )
}
export default User