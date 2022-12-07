import React from 'react'
import { CartContext } from '../Context/context'
import {AiFillDelete} from 'react-icons/ai'
const CartDropdown = () => {
    const {state:{cart},dispatch} = CartContext();
  console.log(cart)
  return (<div>
   {cart.map((cartSingle)=> 
           (<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5px'}} >
          <img src={cartSingle.image} alt='carted' style={{width:'25px',height:'25px',borderRadius:'50%'}}></img>
          <AiFillDelete onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:{...cartSingle}})}/>
          <span>${cartSingle.price}</span>
     </div>))}
     </div>
  )
}

export default CartDropdown