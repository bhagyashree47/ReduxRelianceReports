import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import {createStore ,applyMiddleware,compose, combineReducers} from 'redux'
//import reducer from './store/reducers'
import thunk from 'redux-thunk'
import datareducer from './store/reducers/data'
import dropdownreducer from './store/reducers/dropdown'
import {Provider} from 'react-redux'

const rootReducer=combineReducers({
    dataR:datareducer,
    dropdownR:dropdownreducer
})


const logger=(store)=>{
    return next=>{
        return action =>{
            console.log('middleware dispatch',action)
            const result=next(action)
            console.log('middlware next state', store.getState())
            return result
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
