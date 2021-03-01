import {combineReducers} from 'redux'
import Products from './Products'
import Cart from './Cart'
import Message from './Message'
import Message2 from './Message2'
import Message3 from './Message3'

const appReducers=combineReducers({
   Products,
   Cart,
   Message,
   Message2,
   Message3
})
export default appReducers;