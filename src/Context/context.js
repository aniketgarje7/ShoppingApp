import React,{useState} from 'react'
import { createContext } from 'react'
import { useContext ,useReducer,useEffect} from 'react'
import {reducer,filterReducer} from './reducer'
import {faker} from '@faker-js/faker'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../firebase'

const cart = createContext()
const Context = ({children}) => {
  const [user,setUser] = useState(null)
  faker.seed(100)
  const productArry = [...Array(20)].map(()=>({
    image:faker.image.animals(640,480,true),
    Name:faker.commerce.productName(),
    price:faker.commerce.price(),
    rating:Math.floor(Math.random()*5)+1,
    delivery:Math.floor(Math.random()*8)+1
   }
   ))
   const initialState = {
    products:[...productArry],
    cart:[]
   }
    const [state,dispatch] = useReducer(reducer,initialState)
    const [filterState,filterDispatch] = useReducer(filterReducer,{
      ascending:false,
      discending:false,
      fastDelivery:false,
      stars:0,
      query:''
    })

    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user)setUser(user)
        else setUser(null)
      })
   },[setUser])
    console.log('1')
  return (
    <cart.Provider value={{state,dispatch,filterState,filterDispatch,user,setUser}} >
        {children}
    </cart.Provider>
  )
}

export const CartContext = ()=>{
  return useContext(cart)
}

 export default Context
