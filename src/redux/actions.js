import {INCREMENT,DECREMENT, EDITTITLE} from './actionTypes'


export const increment = () => ({type:INCREMENT})

export const decrement = () => ({type:DECREMENT})

export const editTitle = (editedText) => ({type: EDITTITLE, text : editedText})