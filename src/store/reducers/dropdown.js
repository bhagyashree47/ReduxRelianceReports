import *  as actionTypes from '../actions/actionTypes'
const initialState = {
    
    dropdownValue: "Select Agent Name"

}
const dropdownreducer = (state = initialState, action) => {
    console.log(state.dropdownValue)
    switch(action.type){
        case actionTypes.DROPDOWNCLICK:{
            return{
                ...state,
                dropdownValue:action.payload
            }

        }
        
    }
    
     return state
}
export default dropdownreducer;