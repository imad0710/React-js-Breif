import {ADD_cart} from '../types'

export const add_cart = (data,nub) => {
    const action = {
         type: ADD_cart,
         data,
         nub,


    }
    console.log("Add" , action)
    return action
}