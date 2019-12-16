import *  as actionTypes from '../actions/actionTypes'
const initialState = {
    Data:[],
    error:false
   
}
const datareducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_DATA:{
            return{
                ...state,
                Data:action.payload,
                error:false
            }

        }
        case actionTypes.FETCH_DATA_FAIL:{
            return{
                ...state,
                error:true
            }
        }
        
        
    }
    
     return state
}
export default datareducer;