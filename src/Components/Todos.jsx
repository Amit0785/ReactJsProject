import React,{useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { addTodo,deleteTodo,removeTodo } from '../Redux/Actions/index';
//import Box from '@mui/material/Box';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


import "./Todos.css";

const Todo = () => {
  const [addItem,setAddItem]=useState("");
  const dispatch=useDispatch();
  const list=useSelector((state)=> state.Todoreducer.list);
  return (
   <div style={{flex:1}}>

   <h1>Enter your Data</h1>

     
      <div className="addItems">
               <input type="text" placeholder="Add Items.."
                 value={addItem}
                 onChange={(event)=>{setAddItem(event.target.value)}}
               />
               <AddIcon onClick={()=> dispatch(addTodo(addItem), setAddItem(""))} fontSize='large'/>
      </div>

      <div style={{marginTop:20}}>
        {list.map((item,index)=>{
            return(
                <div key={index} style={{display:'flex'}}>
                    <h3 style={{marginRight:50}}>{item.data}</h3>

                    <DeleteIcon onClick={()=> dispatch(deleteTodo(item.id))} fontSize='large'/>


                </div>
            )
        })}
      </div>


     <Button variant="outlined" color="error" startIcon={<DeleteIcon /> }onClick={()=>{dispatch(removeTodo())}}>
        Remove All
     </Button>

   

   </div>
  )
}

export default Todo