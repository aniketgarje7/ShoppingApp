import React,{useEffect} from 'react'
// import Row from 'react-bootstrap/Row'
// import SingleProduct from './SingleProduct'
import './cartComponent.css'
import {AiFillDelete} from 'react-icons/ai'
import { CartContext } from '../../Context/context'
import { doc, setDoc,onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

import { Button } from 'react-bootstrap';

const CartComponent = () => {
    const {state:{cart},dispatch,user} = CartContext()
    // let userID = "xQDOB01FuYTdFFbrbxXc7twh1tA2"
   const saveCart=async()=>{
    if(user){ const data = doc(db,'products',user.uid);
    try{
       await setDoc(data,{products:[...cart]})
       alert('saved')
    }
    catch(e){
          alert(e.message)
          console.log(e)
    } 
  }
  else{alert('please log in')}
   }
   useEffect(()=>{
    if(user){
      const data = doc(db,'products',user.uid)
    var unsuscribe=  onSnapshot(data,(product)=>{
        if(product.exists()){
          dispatch({type:"FIREBASECART",payload:[...product.data().products]})
        }
      })
       console.log('inside login')
      return  ()=>{unsuscribe()}
    }
   
  },[user])
    
  
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
        <Button onClick={saveCart} variant='dark'>Save Cart</Button>
       </div>
      </div>
   </>
  )
}

export default CartComponent