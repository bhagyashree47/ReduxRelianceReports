
import * as actionTypes from './actionTypes'
export const dropDownClick=(id)=>{
    return{
        type:actionTypes.DROPDOWNCLICK,
        payload:id
    }
}