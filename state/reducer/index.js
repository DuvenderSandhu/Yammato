import { combineReducers } from "redux";
import LoggedUser from './LoggedUser'
import Addcart from './AddcartReducer'
import SuccessReducers from './SuccessReducers'
import ErrorReducers from './ErrorReducers'
import WarningReducers from './WarningReducers'
const reducers = combineReducers({
  user: LoggedUser,
  addcart: Addcart,
  success: SuccessReducers,
  error:ErrorReducers,
  warning:WarningReducers
})
export default reducers;