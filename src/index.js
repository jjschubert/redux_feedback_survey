import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';


// const {
//     feeling, 
//     understanding, 
//     support,
//     comments
// }


const feedbackReducer = (state={}, action) => {
 if (action.type === 'ADD_FEELINGS') {
     return {
         ...state,
         feeling: Number(action.payload),
     }
 }
 if (action.type === 'ADD_UNDERSTANDING') {
    return {
        ...state,
        understanding: Number(action.payload),
    }
}
if (action.type === 'ADD_SUPPORT') {
    return {
        ...state,
        support: Number(action.payload),
    }
}
if (action.type === 'ADD_COMMENTS') {
    return {
        ...state,
        comments: action.payload,
    }
}
    return state
}

const reduxStore = createStore(
    combineReducers({
       feedbackReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
