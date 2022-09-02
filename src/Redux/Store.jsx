import {createStore,applyMiddleware} from 'redux'
import rootReducer from './Reducers/index'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


//const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(logger),
  // other store enhancers if any
));
export default store