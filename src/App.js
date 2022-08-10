//import logo from './logo.svg';
import './App.css';

// import StackNavigation from './Pages/StackNavigation';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import {useSelector,useDispatch} from 'react-redux'
import {Incr,Decr,Mult,Div} from './Redux/Actions/index'

function App() {
  const mystate=useSelector((state)=>state.UpDown)
  const calState=useSelector((state)=>state.Calculator)
  const dispatch=useDispatch()
  return (
  <>

  <h1>Value={mystate}</h1>
  {/* <image /> */}
  <button onClick={()=>{dispatch(Incr(5))}}>Increment</button>
  <button onClick={()=>{dispatch(Decr())}}>Decrement</button>
  <br/>
  <h1>Calculator Value={calState}</h1>
    <button onClick={()=>{dispatch(Mult(2))}}>Multiply</button>
     <button onClick={()=>{dispatch(Div())}}>Divide</button>
    

   {/* <Navbar/>
   <StackNavigation/>
   <Footer/> */}
     </>
  );
}

export default App;
