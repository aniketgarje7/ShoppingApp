import React from 'react'
import { Navbar,Container ,Nav,Dropdown, Badge} from 'react-bootstrap'
import {BsFillCartCheckFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Context/context'
import CartDropdown  from './CartDropdown'


const NavbarComponent = () => {
  const {state:{cart}} = CartContext()
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav style={{}}>
      <Navbar.Brand  as={NavLink} to="/">
       <BsFillCartCheckFill style={{color:'green'}}/>{' '}
        ShoppingCart App
      </Navbar.Brand>
      
      <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
      </Nav>
      <div style={{marginRight:'90px'}}>
        <Dropdown>
      <Dropdown.Toggle variant='success'>
          <BsFillCartCheckFill/>
          <Badge>{cart.length}</Badge>
        </Dropdown.Toggle>
        <Dropdown.Menu className='navDropMenu'>
          {cart.length===0?<Dropdown.Item as="text">cart is empty</Dropdown.Item>:<CartDropdown/>}
          <Dropdown.Item as={NavLink} to='/cart'>Go to Cart</Dropdown.Item>
         
         </Dropdown.Menu>
         </Dropdown>
         </div>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent