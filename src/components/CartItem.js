import react, { useState } from 'react';
import * as Message from '../Contants/Message'
import PropTypes from 'prop-types'

function CartItem({item,onDelete,onChangeMessage1,onUpdate} ) {
// console.log(item);
  const [solg,setSolg]=useState(1);
  const onDeleteProduct=(product)=> {
    onDelete(product);
    onChangeMessage1(Message.MSG_DELETE_TO_CART_SUCCSESS)
  }
  const showToTal=(price,solg) =>{
    return (price * solg)
  }
  const onUpdatesolg=(product,solg)=> {
    if(solg>0){
      setSolg(solg)
      onUpdate(product,solg)
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
        <span className="qty">{item.solg >0 ? item.solg :solg} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label onClick={() =>onUpdatesolg(item.product,item.solg -1)}
           className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
            <a>—</a>
          </label>
          <label  onClick={() =>onUpdatesolg(item.product,item.solg +1)}
           className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
            <a>+</a>
          </label>
        </div>
      </td>
      <td>{showToTal(item.product.price,item.solg)}$</td>
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
CartItem.propTypes = {
  item: PropTypes.object.isRequired,
onDelete: PropTypes.func.isRequired,
onChangeMessage1:PropTypes.func.isRequired,
onUpdate:PropTypes.func.isRequired,
}

export default CartItem; 
