import {ADD_cart} from '../types'

const reminders =(state=[], action) => {
    let reminders =[];

    if(action.type ===  ADD_cart){
        reminders = [...state, { data:action.data}] 
        return reminders
    }
    else{
        return state
    }

   
}

export default reminders