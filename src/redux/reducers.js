import {INCREMENT,DECREMENT, EDITTITLE} from './actionTypes'


const initialState = 
{
    counter:0,
    title : ""
}

export const reducer = (state = initialState,action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state,counter:state.counter+1}
            
        case DECREMENT:
            return {...state,counter:state.counter-1}

        case EDITTITLE:
            return {...state,title : action.text}
        default:
            return state
    }
}