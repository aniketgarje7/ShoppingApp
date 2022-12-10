import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import {auth} from '../../firebase'
import {  signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState} from 'react'
import { CartContext } from '../../Context/context';
import './logIn.css'


const  LogIn =({handleClose})=> {
 const {user} = CartContext()
 const [email,setEmail] = useState();
 const [password,setPassword] = useState();
    const handleLogIn = async()=>{
        if(!email && !password){
            alert('enter valid credentials')
        }
        else{
        try{
            const result = await signInWithEmailAndPassword(auth,email,password )
            alert('loggedin')
            console.log(result)
            handleClose()
        }
        catch(e){
            alert(e)
           
        }
    }
    }
    const handleLogOut = ()=>{
        signOut(auth)
        handleClose()
        alert('suuceful')
    }
    
   
  return (
    <Container style={{padding:'30px'}} className='loggedInForm'>
      {user? <div>
         <Container style={{padding:'30px'}}>
            <h4> {user.email} is logged in</h4>
            
         </Container>
      </div>
    :<Form className='logInForm'>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control id='input1' type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control id='input2' type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
     </Form>}
     {user? <Button onClick={handleLogOut} variant='dark'>LogOut</Button>:
     <Button onClick={handleLogIn} variant='dark'>Login</Button>}
    </Container>
  );
}

export default LogIn;