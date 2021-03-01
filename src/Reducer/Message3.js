import * as Types from '../Contants/ActionType';
import * as Message from '../Contants/Message'

var initialState =""

const message3 = (state = initialState, action) => {
 
   switch (action.type) {
      case Types.CHANGE_MESSAGE3:
         return action.message3
      default: return state;
   }
}

export default message3;