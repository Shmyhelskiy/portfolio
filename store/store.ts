import { combineReducers, createStore } from 'redux'
import rootReducer from './reducers/root.reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers(rootReducer), composeWithDevTools())

export default store