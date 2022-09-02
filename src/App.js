//import logo from './logo.svg';
import './App.css';


import StackNavigation from './Pages/StackNavigation';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



// import Cart from './Components/Cart';
// import Todos from './Components/Todos';

function App() {
  
  return (
    <>
      <div style={{flex:1,height:"100vh"}}>

      {/* <Cart/>
      <br/>
      <Todos/> */}
    

   <Navbar/>
   <StackNavigation/>
   <Footer/>


     </div> 
     

    </>

  );
}

export default App;
