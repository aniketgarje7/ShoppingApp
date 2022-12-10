import React from 'react'
import { Navbar ,Nav,Dropdown, Badge} from 'react-bootstrap'
import {BsFillCartCheckFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Context/context'
import CartDropdown  from './CartDropdown'
import './navbarComponent.css'
import AuthModal from './Authentication/AuthModal'


const NavbarComponent = () => {
  const {state:{cart},filterDispatch} = CartContext()
   
  return (
    <Navbar bg="dark" variant="dark" style={{display:'flex' ,justifyContent:'space-between'}}>
    
    <Nav >
      <Navbar.Brand  as={NavLink} to="/">
       <BsFillCartCheckFill style={{color:'green'}}/>{' '}
        ShoppingCart App
      </Navbar.Brand>
      
      <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
      </Nav>

      <div style={{display:'flex',marginRight:'30px'}}>
        <input placeholder='search product' className='searchInput' onChange={
          (e)=>filterDispatch({type:'SEARCH',payload:e.target.value})}></input>
      <div style={{marginRight:'10px'}}>
        <Dropdown>
      <Dropdown.Toggle variant='success'>
          <BsFillCartCheckFill/>
          <Badge>{cart.length}</Badge>
        </Dropdown.Toggle>
        <Dropdown.Menu className='navDropMenu' >
          {cart.length===0?<Dropdown.Item className='textEmpty'>Cart is empty</Dropdown.Item>:<CartDropdown/>}
          <Dropdown.Item as={NavLink} to='/cart' className='goToCart'>Go to Cart</Dropdown.Item>
          </Dropdown.Menu>
         </Dropdown>
         </div>
         <div className='authModalDiv'>
         <AuthModal/>
         </div>
         </div>
     
       
  </Navbar>
  )
}

export default NavbarComponent