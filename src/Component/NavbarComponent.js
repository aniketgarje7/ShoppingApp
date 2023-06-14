import React from 'react'
import { Navbar ,Nav,Dropdown, Badge,NavDropdown,Container} from 'react-bootstrap'
import {BsFillCartCheckFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Context/context'
import CartDropdown  from './CartDropdown'
import './navbarComponent.css'
import AuthModal from './Authentication/AuthModal'


const NavbarComponent = () => {
  const {state:{cart},filterDispatch} = CartContext()
   
  return (
    
  //   <Navbar  bg="dark" variant="dark" className='navCSS' collapseOnSelect expand="sm">
    
  //   <Nav  >
  //     <Navbar.Brand  as={NavLink} to="/" className='brandNav'>
  //      <BsFillCartCheckFill style={{color:'green'}}/>{' '}
  //       ShoppingCart App
  //     </Navbar.Brand>
      
  //     <Nav.Link as={NavLink} to='/home' className='navHome'>Home</Nav.Link>
  //     </Nav>
      
  //     <div className='jigar'>
      
  //       <input placeholder='search product' className='searchInput' onChange={
  //         (e)=>filterDispatch({type:'SEARCH',payload:e.target.value})}></input>
  //     <div className='twoCom'>
  //       <Dropdown>
  //     <Dropdown.Toggle variant='success'>
  //         <BsFillCartCheckFill/>
  //         <Badge>{cart.length}</Badge>
  //       </Dropdown.Toggle>
  //       <Dropdown.Menu className='navDropMenu' >
  //         {cart.length===0?<Dropdown.Item className='textEmpty'>Cart is empty</Dropdown.Item>:<CartDropdown/>}
  //         <Dropdown.Item as={NavLink} to='/cart' className='goToCart'>Go to Cart</Dropdown.Item>
  //         </Dropdown.Menu>
  //        </Dropdown>
        
  //        <div className='authModalDiv'>
  //        <AuthModal/>
  //        </div>
  //        </div>
  //        </div>
         
  // </Navbar>

    <Navbar className='navbar_main' expand="lg">
      <Container>
      <Navbar.Brand  as={NavLink} to="/" className='brandNav'>
        <BsFillCartCheckFill style={{color:'green'}}/>{' '}
         ShoppingCart App    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-between" id='nav_parent'>
          <Nav.Link as={NavLink} to='/home' className='navHome text-white'>Home</Nav.Link> 

      
            <input placeholder='search product' className='searchInput' onChange={
              (e)=>filterDispatch({type:'SEARCH',payload:e.target.value})}></input>
          
            <Dropdown>
          <Dropdown.Toggle variant='success'>
              <BsFillCartCheckFill/>
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu className='navDropMenu p-2' >
              {cart.length===0?<Dropdown.Item className='textEmpty cursor-pointer'>Cart is empty</Dropdown.Item>:<CartDropdown/>}
              <Dropdown.Item as={NavLink} to='/cart' className='goToCart cursor-pointer'>Go to Cart</Dropdown.Item>
              </Dropdown.Menu>
             </Dropdown>
            
             <div className='authModalDiv'>
             <AuthModal/>
             </div>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavbarComponent