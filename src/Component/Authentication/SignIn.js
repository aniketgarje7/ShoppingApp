import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {useState} from 'react'


const  SingUp =({handleClose})=> {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()
    const handleSignUp = async()=>{
       
        if(confirmPassword!==password){
           alert('signuped')
           console.log('djfisadj')
        }
       else{ 
       try{
        const result =  await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        console.log(result,'inside try')
          alert('succesfully Sign up')
           handleClose()
       }
       catch(e){
           alert('error',e.message)
           console.log(e)
       }
       
        }
    }
  return (
    <Container style={{padding:'30px'}}>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" autoComplete='off'  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  placeholder="Password" autoComplete='off'  onChange={(e)=>setPassword(e.target.value)}/>
        <Form.Label>confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" autoComplete='off' onChange={(e)=>setConfirmPassword(e.target.value)} />
      </Form.Group>
      <Button onClick={handleSignUp} variant='dark'>SingUp</Button>
    </Form>
    </Container>
  );
}

export default SingUp;