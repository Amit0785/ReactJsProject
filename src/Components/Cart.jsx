import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Incr,Decr,} from '../Redux/Actions/index'
import Badge from '@mui/material/Badge';
import DeleteIcon from '@mui/icons-material/Delete';

import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Cart() {

  const mystate=useSelector((state)=>state.UpDown)
  
  
  const dispatch=useDispatch()
  return (
    <div style={{marginTop:25,alignSelf:'flex-end'}}>
   

    <Stack spacing={3} direction="row">

     <IconButton aria-label="cart" color='primary' >
      <Badge badgeContent={mystate} color="secondary" >
        <ShoppingCartIcon size='large'/>
      </Badge> 
      
    </IconButton>
      <Button variant="contained" color="success" onClick={()=>{dispatch(Incr(1))}}>
        Add to Cart
       </Button>
     <Button variant="outlined" color="error" startIcon={<DeleteIcon /> }onClick={()=>{dispatch(Decr())}}>
        Remove
     </Button>
    </Stack>
    
    </div>
  )
}

export default Cart