import { combineReducers } from "redux";
import Calculator from "./Calculator";
import UpDown from './UpDown'

const rootReducers=combineReducers({
    Calculator,UpDown
})

export default rootReducers