import react, { useState } from 'react';
import Product from './Product';
//import {connect} from 'react-redux'
import { Input } from '@material-ui/core';
import ProductsContainer from './../Containers/ProductContainer'
function Products({children,onChangeMessageFilter,onChangeMessageSearch}) {
  // var showProducts=(products)=>{
  //   var result=null;
  //   if(products.length > 0){
  //     result = products.map((product,index)=>{
  //       return <Product key={index} product={product}/>
  //     })
  //   }
  //   return result;
  // }
 const fillHang=(hang)=> {
  onChangeMessageFilter(hang)
 }
 const [searchInput, setSearchInput] = useState("");
 const handlerSearch = (event) => {
    setSearchInput(event.target.value)

 }
 const clickSearch = () => {
   onChangeMessageSearch(searchInput)
    
 }
 const clearSearch = () => {
    setSearchInput("")
    onChangeMessageSearch("")
 }
  return (
    <section className="section">
    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
    
      <div className="row">
      <div className="dropdown right">
         <button  className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Lọc sản phẩm
        </button>
         <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
         <button onClick={() =>fillHang("Tatca")}  className="dropdown-item" type="button">Tất cả</button>
            <button onClick={() =>fillHang("Apple")}  className="dropdown-item" type="button">Apple</button>
            <button onClick={() =>fillHang("Samsung")} className="dropdown-item" type="button">Samsung</button>
            <button onClick={() =>fillHang("Oppo")} className="dropdown-item" type="button">Oppo</button>
         </div>
         <hr/>
      </div>
      <div className="col-md-5">
            <div className="input-group">
              <input type="text"  name="searchInput" onChange={handlerSearch} value={searchInput} className="form-control" placeholder="Search name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
               <div className="input-group-append">
                  <button className="btn btn-danger" onClick={clickSearch} type="button">Tìm kiếm</button>
                  <button  className="btn btn-warning" onClick={clearSearch} type="button">Xóa</button>
               </div>
            </div>
         </div>
      </div>
    <div className="row">
      {children}
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
