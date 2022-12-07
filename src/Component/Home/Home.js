import React from 'react'
import Row from 'react-bootstrap/Row';
import SingleProduct from '../SingleProduct';
import InputCheck from '../InputCheck/InputCheck';
import './home.css'
import { CartContext } from '../../Context/context';

const Home = () => {
    const {state:{products},filterState} = CartContext();
    const {ascending,discending,fastDelivery,stars} = filterState
    let productsDummy = []
  if(!discending && ascending){
    productsDummy= productsDummy.length===0?products.sort((a,b)=>(a.price-b.price)):
   productsDummy.sort((a,b)=>(a.price-b.price))
  }
  if(!ascending && discending){
    productsDummy= productsDummy.length===0?products.sort((a,b)=>(b.price-a.price)):
    productsDummy.sort((a,b)=>(b.price-a.price))}
  if(fastDelivery){
   productsDummy=products.filter((pr)=>pr.delivery===1)
  }
  if(stars!==0){
   productsDummy=productsDummy.length===0?products.filter((pr)=>pr.rating>=stars)
    :productsDummy.filter((pr)=>pr.rating>=stars)
  }
  if(!ascending && !discending && !fastDelivery && stars===0){
   productsDummy=[...products]
  }
 return <div className='homeContainer'> 
   <div className='id'>
   <InputCheck /></div>
   <Row className='homeRow'>
     {productsDummy.map((single,index)=>{
          return <SingleProduct single={single}  key={index}/>
     })}</Row>
  
  </div>
}

export default Home