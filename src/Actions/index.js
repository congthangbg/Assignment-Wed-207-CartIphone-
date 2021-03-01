import * as Types from './../Contants/ActionType';


export const actAddToCart=(product,solg)=>{
   //console.log(product);
   return {
      type: Types.ADD_TO_CART,
      product : product,
      solg: solg
   }
}
export const actChangeMessage=(message)=>{
   return {
      type: Types.CHANGE_MESSAGE,
      message
   }
}
export const actChangeMessage2=(message2)=>{
   return {
      type: Types.CHANGE_MESSAGE2,
      message2
   }
}
export const actChangeMessage3=(message3)=>{
   return {
      type: Types.CHANGE_MESSAGE3,
      message3
   }
}
export const actRemoveFromCart=(product)=>{
   return {
      type: Types.DELETE_PRODUCT,
      product : product
   }
}
export const actUpdateProduct=(product,solg)=>{
   return {
      type: Types.UPDATE_PRODUCT,
      product : product, 
      solg,
   }
}