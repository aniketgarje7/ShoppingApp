import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LogIn from './Login';
import SingUp from './SignIn';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './AuthModal.css'
import { CartContext } from '../../Context/context';
function AuthModal() {
  const [show, setShow] = useState(false);
 const {user} = CartContext();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        {user?'LogOut':'LogIn'}
      </Button>

      <Modal show={show} onHide={handleClose} className='logModal'>
        
        
        <Tabs
      defaultActiveKey="logIn"
    //    style={{display:'flex',flexDirection:'row'}}
       className="flex-row"
      justify={true}
      variant='pills'
      style={{backgroundColor:'black'}}
    >
      <Tab eventKey="logIn" title="LogIn"  >
      <LogIn handleClose={handleClose}/>
      </Tab>
      <Tab eventKey="signUp" title="SignUp"  >
        <SingUp handleClose={handleClose}/>
      </Tab>
      </Tabs>
        
        
      </Modal>
    </>
  );
}

export default AuthModal