import {ADD_cart} from '../types'

const reminders =(state=[], action) => {
    let reminders =null;

    if(action.type ===  ADD_cart){
        reminders = [...state, { data:action.data}] 
        console.log("from reducers",reminders)
        return reminders
        }
    else
        return state
    

   
}

export default reminders