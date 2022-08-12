import { combineReducers } from "redux";
import Calculator from "./Calculator";
import UpDown from './UpDown'
import Todoreducer from "./Todoreducer";

const rootReducer=combineReducers({
    Calculator,UpDown,Todoreducer
})

export default rootReducer