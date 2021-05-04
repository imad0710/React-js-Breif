import {ADD_cart} from '../types'

export const add_cart = (data) => {
    const action = {
         type: ADD_cart,
         data,

    }
    console.log("Add" , action)
    return action
}