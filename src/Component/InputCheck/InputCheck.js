import React  from 'react'
import { Button, Form } from 'react-bootstrap'
import './inputCheck.css'
import RatingStars from './RatingStars'
import { CartContext } from '../../Context/context'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FaFilter} from 'react-icons/fa'

const InputCheck = () => {
  const {filterState:{ascending,discending,fastDelivery,stars},filterDispatch} = CartContext()
   
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <div className='container'>
      <Button variant="primary" className="d-lg-none filter_button" onClick={handleShow}>
      <FaFilter/>
      </Button>
   </div>
      {/* <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert> */}

      <Offcanvas show={show} onHide={handleClose} responsive="lg" className='bg-website'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-white'>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='filter '>
        <div className='title  d-none d-lg-block'>Filter</div>
      <div className='filters'>
     <span >
        <Form.Check
         type='radio'
         label='Ascending Product'
         name='group1'
         id={'inline-1'}
         className='px-5 '
        onChange={()=>filterDispatch({type:'ASCENDING'})}
        checked={ascending}
        
        ></Form.Check>
    </span>
     <span>
        <Form.Check
         type='radio'
         label='Decending Product'
         id={'inline-2'}
         name='group1'
         className='px-5 '
         onChange={()=>filterDispatch({type:'DESCENDING'})}
        checked={discending}
        ></Form.Check>
    </span>
    <span>
        <Form.Check
         type='checkbox'
         label='fast delivery'
         id={'inline-3'}
         name='group2'
         className='px-5 cursor-pointer'
         onChange={()=>filterDispatch({type:'FASTDELIVERY'})}
        checked={fastDelivery}
        ></Form.Check>
    </span>
    <span >
    <RatingStars
        rating={stars}
        onClick={(star) => filterDispatch({type:'STARS',payload:star})}
      />
      <div >
        <Button className='buttonSpan mx-3' onClick={()=>filterDispatch({type:'BUTTON'})}>clear all the tags</Button>
        </div>
    </span>
    
    </div>
   </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>

  )
}

export default InputCheck