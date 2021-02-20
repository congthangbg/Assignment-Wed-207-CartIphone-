import * as Types from './../Contants/ActionType';


export const actAddToCart=(product,quantity)=>{
   return {
      type: Types.ADD_TO_CART,
      product : product,
      quantity: quantity
   }
}
export const actChangeMessage=(message)=>{
   return {
      type: Types.CHANGE_MESSAGE,
      message
   }
}
export const actRemoveFromCart=(product)=>{
   return {
      type: Types.DELETE_PRODUCT,
      product : product
   }
}
export const actUpdateProduct=(product,quantity)=>{
   return {
      type: Types.UPDATE_PRODUCT,
      product : product, 
      quantity,
   }
}