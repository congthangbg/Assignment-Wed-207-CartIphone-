import React, { Component } from 'react';
import ApiCaller from '../AxiosUtils/ApiCaller'
import axios from 'axios'
function FormCreate({ click, idDelete, itemProduct, setItemProduct, products,
   setClick, data, setData, setStateForm, onClear }) {

   const onChangHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value
      setData({
         ...data,
         [name]: value,
      })
   }
   const handleSubmit = (event) => {
      const createProduct = "https://60122a3f5fffd8001708945f.mockapi.io/api/v1/my_Asm"
      event.preventDefault();
      if (click == -1) {
         axios.post(createProduct, data)
            .then((response) => {
               setItemProduct([
                  ...products,
                  response.data,
               ]);
               products.push(data)
               setStateForm(false)
            })
            .catch((error) => {
               console.log(error, error.response);
            })

      } else {//Edit
         const UrlUpdate = "https://60122a3f5fffd8001708945f.mockapi.io/api/v1/my_Asm/" + data.id
         axios.put(UrlUpdate, data)
            .then((response) => {
               const newProduct = products.map((value, index) => {
                  if (index == click) {
                     setStateForm(false)
                     products[index] = data
                     return response.data
                  } else {
                     return value;
                  }
               })

               setItemProduct(newProduct)
            })
            .catch((error) => {
               console.log(error, error.response);
            })
      }
   }
   // const handleDelete=(id) => {
   //    idDelete(id)
   // }
   //hideBtnADD
   let elmButton = <button type="submit" className="btn btn-primary ">Thêm</button>
   if (click != -1) {
      elmButton = <button type="submit" className="btn btn-primary ">Sửa</button>
   }
   return (
      <form className="mt-4" onSubmit={handleSubmit} style={{ marginLeft: 150 }}>
         <div className="row mt-2">
            <label htmlFor="inputEmail3" className="col-md-2 col-form-label">ID</label>
            <div className="col-md-8">
               <input onChange={onChangHandler} value={data.id} disabled name="id" type="input" className="form-control" placeholder="Id" />
            </div>
         </div>
         <div className=" row mt-2">
            <label htmlFor="inputEmail3" className="col-md-2 col-form-label">Tên sản phẩm</label>
            <div className="col-md-8">
               <input onChange={onChangHandler} value={data.name} name="name" type="input" className="form-control" placeholder="Tên sản phẩm" />
            </div>
         </div>
         <div className=" row mt-2">
            <label htmlFor="inputEmail3" className="col-md-2 col-form-label">Hình ảnh</label>
            <div className="col-md-8">
               <input onChange={onChangHandler} value={data.image} name="image" type="input" className="form-control" placeholder="Url image" />
            </div>
         </div>
         <div className=" row mt-2">
            <label htmlFor="inputEmail3" className="col-md-2 col-form-label">Hãng</label>
            <div className="col-md-8" >
                  <select  className="form-control browser-default custom-select " style={{height:"40px"}} name="description" onChange={onChangHandler} value={data.description} >
                     <option defaultValue value="Apple">Apple</option>
                     <option value="Samsung">Samsung</option>
                     <option value="Oppo">Oppo</option>
                  </select>
               </div>
         </div>
         <div className="row mt-2">
            <label className="col-md-2 col-form-label">Giá</label>
            <div className="col-md-8">
               <input onChange={onChangHandler} value={data.price.type=="string" ? alert("Please"): data.price} name="price" type="input" className="form-control" placeholder="Giá $$$" />
            </div>
         </div>
         <div className="row mt-2">
            <label className="col-md-2 col-form-label">Xếp hạng *</label>
            <div className="col-md-8">
                  <select className="browser-default custom-select" name="rating" onChange={onChangHandler} value={data.rating} >
                     <option value={5}>5 * </option>
                     <option value={4}>4 *</option>
                     <option value={3}>3 *</option>
                     <option value={2}>2 *</option>
                     <option value={1}>1 *</option>
                  </select>
               </div>
         </div>
         
         <div className="form-group row">
            <div className="col-md-10 ml-auto">
               {elmButton}
               <button onClick={onClear} type="button" className="btn btn-primary ml-3">Clear</button>
               {/* <button onClick={()=>handleDelete(data.id)} type="submit" className="btn btn-primary ml-3">Xoá</button> */}
            </div>
         </div>
      </form>
   );
}

export default FormCreate;