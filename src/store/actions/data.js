import * as actionTypes from './actionTypes'
import axios from 'axios'

export const setData=(data)=>{
    return{
        type:actionTypes.SET_DATA,
        payload:data
    }

}

export const fetchDataFail=()=>{
    return{
        type:actionTypes.FETCH_DATA_FAIL

    }
}
export const fetchData=()=>{
    return dispatch=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
           dispatch(setData(response.data))
           
        })
        .catch(error=>{
            dispatch(fetchDataFail())
        }

        )
    }
}