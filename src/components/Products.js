import react from 'react';
import Product from './Product';
//import {connect} from 'react-redux'

function Products(props) {
  // var showProducts=(products)=>{
  //   var result=null;
  //   if(products.length > 0){
  //     result = products.map((product,index)=>{
  //       return <Product key={index} product={product}/>
  //     })
  //   }
  //   return result;
  // }
  return (
    <section className="section">
    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
    <div className="row">
      {props.children}
    </div>
  </section>
  );
}

// const mapStateToProps= state=> {
//   return {
//     products:state.Products
//   }
// }
export default (Products);
// export default connect(mapStateToProps,null)(Products);
