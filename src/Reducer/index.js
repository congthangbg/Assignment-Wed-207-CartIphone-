import {combineReducers} from 'redux'
import Products from './Products'
import Cart from './Cart'
import Message from './Message'

const appReducers=combineReducers({
   Products,
   Cart,
   Message,
})
export default appReducers;