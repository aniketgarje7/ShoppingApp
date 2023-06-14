
import Col from 'react-bootstrap/Col';
import {Card,ListGroup,Button} from 'react-bootstrap'
import { CartContext } from '../Context/context';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import './SingleProduct.css'

const SingleProduct = ({single}) => {
 
  const {state:{cart},dispatch} = CartContext()

  
  
  const rating = ()=>{
   const arr = [...Array(5)]
    return arr.map((_,i)=>{
     return(i>single.rating-1?<AiOutlineStar key={i}/>:<AiFillStar key={i}/>)
    })
    
 
  }
  return (
    
    <Col style={{margin:'0',padding:'0'}} className='col-lg-3 col-md-4 col-sm-6  col-10 m-4'>
         <Card >
    <Card.Img variant="top" src={single.image} alt='no image fond' />
   
      
      
   
    <ListGroup className="list-group-flush">
    <ListGroup.Item style={{height:'2rem' }}>{single.Name}</ListGroup.Item>
      <ListGroup.Item>Price  ${Number(single.price)}</ListGroup.Item>
      <ListGroup.Item>Rating{rating()}  </ListGroup.Item>
      <ListGroup.Item>{single.delivery<2?'Fast delivery':`${single.delivery} days for delivery`} </ListGroup.Item>
      {cart.some(id=>id.Name===single.Name)?
      <Button variant='dark' onClick={
        ()=>dispatch({type:"REMOVE_FROM_CART",payload:{...single}})}>Remove from the cart</Button>:
        <Button variant='primary' onClick={()=>dispatch({type:"ADD_TO_CART",payload:{...single}})}> Add to cart</Button>}
    </ListGroup>
   
     
  </Card>
        </Col>
        
  )
}

export default SingleProduct