import { createStore, combineReducers } from 'redux'

const reducers = {} // put all reducers here

const rootReducers = combineReducers(reducers) // put reducers in a form that can be passed to the createStore function

export const configureStore = () => createStore(rootReducers)