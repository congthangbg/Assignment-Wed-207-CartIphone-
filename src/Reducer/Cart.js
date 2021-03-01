import * as Types from './../Contants/ActionType';


var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : []

const Products = (state = initialState, action) => {
   var index = -1;
   var { product, solg } = action;
   switch (action.type) {
      case Types.ADD_TO_CART:
         index = findProductIndex(state, product);
         if (index !== -1) {
            state[index].solg += solg
         } else {
            state.push({
               product: action.product,
               solg: action.solg
            })
         }
         localStorage.setItem('CART', JSON.stringify(state))
         return [...state];
      case Types.DELETE_PRODUCT:
         index = findProductIndex(state, product)
         if (index !== -1) {
            state.splice(index, 1);
         }
         localStorage.setItem('CART', JSON.stringify(state))
         return [...state];
      case Types.UPDATE_PRODUCT:
         index = findProductIndex(state, product);
         if (index !== -1) {
            state[index].solg = solg;
           
         }
         localStorage.setItem('CART', JSON.stringify(state))
         return [...state];
      default: return [...state]

   }
}
const findProductIndex = (cart, product) => {
   var index = -1;
   if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
         if (cart[i].product.id == product.id) {
            index = i;
            break;
         }
      }
   }
   return index;
}
export default Products;