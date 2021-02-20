import react, { useState } from 'react';
import * as Message from '../Contants/Message'

function CartItem({item,onDelete,onChangeMessage1,onUpdate} ) {

  const [quantity,setQuantity]=useState(1);
  const onDeleteProduct=(product)=> {
    onDelete(product);
    onChangeMessage1(Message.MSG_DELETE_TO_CART_SUCCSESS)
  }
  const showToTal=(price,quantity) =>{
    return (price * quantity)
  }
  const onUpdateQuantity=(product,quantity)=> {
    if(quantity>0){
      setQuantity(quantity)
      onUpdate(product,quantity)
      onChangeMessage1(Message.MSG_UPDATE_TO_CART_SUCCSESS)
    }
  }

  return (
    <tr>
      <th scope="row">
        <img src={item.product.image}
          alt={item.product.name} className="img-fluid z-depth-0" />
      </th>
      <td>
        <h5>
          <strong>{item.product.name}</strong>
        </h5>
      </td>
      <td>{item.product.price}$</td>
      <td className="center-on-small-only">
        <span className="qty">{item.quantity >0 ? item.quantity :quantity} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label onClick={() =>onUpdateQuantity(item.product,item.quantity -1)}
           className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
            <a>—</a>
          </label>
          <label  onClick={() =>onUpdateQuantity(item.product,item.quantity +1)}
           className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
            <a>+</a>
          </label>
        </div>
      </td>
      <td>{showToTal(item.product.price,item.quantity)}$</td>
      <td>
        <button onClick={()=>{onDeleteProduct(item.product)}}
         type="button"
         className="btn btn-sm btn-primary waves-effect waves-light"
          data-toggle="tooltip" data-placement="top"
          title="" data-original-title="Remove item">
          X
      </button>
      </td>
    </tr>
  );
}


export default CartItem; 
