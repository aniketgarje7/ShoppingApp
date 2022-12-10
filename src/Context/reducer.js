

 export const reducer = (state,action) => {
   switch(action.type){
    case 'ADD_TO_CART':
        return {...state,cart:[...state.cart,{...action.payload}]}
        
    case 'REMOVE_FROM_CART':
        return{...state,cart:state.cart.filter((prod)=>prod.Name!==action.payload.Name)}
        
    case 'SETSTATE':
        return {...state,[state.products]:[...action.payload]}
    case 'FIREBASECART':
        return {...state,cart:[...state.cart.filter((pr)=>{
            let  flag = true
             for(let cr of action.payload){
                 
                 if(cr.Name===pr.Name){flag=false}
             }
             return flag && pr
        }),...action.payload]}   

    default:{
        return state;
    }
   }
}



export const filterReducer  = (state,action)=>{
    switch(action.type){
        case 'ASCENDING':{
            return {...state,ascending:true,discending:false}
        }
        case 'DESCENDING':{
            return {...state,discending:true,ascending:false}
        }
        case 'FASTDELIVERY':{
            return {...state,fastDelivery:!state.fastDelivery}
        }
        case 'STARS':{
            return {...state,stars:action.payload}
        }
        case 'BUTTON':{
            return { ascending:false,
                discending:false,
                fastDelivery:false,
                stars:0,
                query:''}
        }
        case 'SEARCH':
            return {...state,query:action.payload}
        default:{
            return state
        }
    }
}
