import React from 'react'
import { CartContext } from '../Context/context'
import {AiFillDelete} from 'react-icons/ai'
const CartDropdown = () => {
    const {state:{cart},dispatch} = CartContext();
  return (<div>
   {cart.map((cartSingle,i)=> 
           (<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5px',}} key={i}>
          <img src={cartSingle.image} alt='carted' style={{width:'25px',height:'25px',borderRadius:'50%'}}></img>
          <AiFillDelete onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:{...cartSingle}})} style={{cursor:'pointer'}}/>
          <span>${cartSingle.price}</span>
     </div>))}
     </div>
  )
}

export default CartDropdown