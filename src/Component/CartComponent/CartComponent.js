import React from 'react'
// import Row from 'react-bootstrap/Row'
// import SingleProduct from './SingleProduct'
import './cartComponent.css'
import {AiFillDelete} from 'react-icons/ai'
import { CartContext } from '../../Context/context'

const CartComponent = () => {
    const {state:{cart},dispatch} = CartContext()
  return (
    <>
      <div className='mainDiv'>
        <div className='cartDiv'>
        {cart.map((singleCart,i)=>(
          
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', padding:'20px'}} 
          key={i}>
           <img src={singleCart.image} style={{height:'50px',width:'50px',borderRadius:'50%'}} 
           alt='cartImag'></img>
           <span style={{width:'40px'}}>{singleCart.Name}</span>
           <AiFillDelete onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:{...singleCart}})}/>
           <span>${Number(singleCart.price)}</span>
        </div>
         ))}</div>
         
       <div className='totalDiv'>
        <h2>Total: </h2>
        <h3> $ {cart.reduce((t,num)=>t+Number(num.price),0)}</h3>
       </div>
      </div>
   </>
  )
}

export default CartComponent