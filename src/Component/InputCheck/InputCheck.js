import React  from 'react'
import { Button, Form } from 'react-bootstrap'
import './inputCheck.css'
import RatingStars from './RatingStars'
import { CartContext } from '../../Context/context'

const InputCheck = () => {
  const {filterState:{ascending,discending,fastDelivery,stars},filterDispatch} = CartContext()
   
  return (
     <div className='filter'>
      <span type='title'>Fuction rating</span>
      <div className='filters'>
     <span>
        <Form.Check
         type='radio'
         label='Ascending Product'
         name='group1'
         id={'inline-1'}
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
         onChange={()=>filterDispatch({type:'FASTDELIVERY'})}
        checked={fastDelivery}
        ></Form.Check>
    </span>
    <span >
    <RatingStars
        rating={stars}
        onClick={(star) => filterDispatch({type:'STARS',payload:star})}
      />
        <Button className='buttonSpan' onClick={()=>filterDispatch({type:'BUTTON'})}>clear all the tags</Button>
    </span>
    
    </div>
   </div>
  )
}

export default InputCheck