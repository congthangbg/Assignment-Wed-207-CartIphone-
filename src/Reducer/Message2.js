import * as Types from '../Contants/ActionType';
import * as Message from '../Contants/Message'

var initialState ="Tatca"

const message2 = (state = initialState, action) => {
 
   switch (action.type) {
      case Types.CHANGE_MESSAGE2:
         return action.message2
      default: return state;
   }
}

export default message2;