import {createStore, applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import authReducer from './auth.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
})


const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store