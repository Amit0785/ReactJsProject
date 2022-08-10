import { combineReducers } from "redux";
import Calculator from "./Calculator";
import UpDown from './UpDown'

const rootReducer=combineReducers({
    Calculator,UpDown
})

export default rootReducer