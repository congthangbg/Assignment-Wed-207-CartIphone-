import React, { Component } from 'react';
import ApiCaller from '../AxiosUtils/ApiCaller'
import axios from 'axios'
import { TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

function FormTable({ products, setClick, itemProduct, itemRemove, setItemRemove, productNew
   , setData, setItemProduct, data, setStateForm, itemSearch }) {

   const onClickHandler = (event, index, value) => {
      setClick(index)
      setData(value)
      setStateForm(true)
   }

   const onDelete = (event, value, index) => {
      event.stopPropagation();
      ApiCaller("my_Asm/" + value.id, "delete", null).then(response => {
         const listNew = itemProduct.filter((val, idx) => {
            if (idx === index) {
               //Loại bỏ phần tử
               const createProduct = "https://60122a3f5fffd8001708945f.mockapi.io/api/v1/itemRemove"
               axios.post(createProduct, itemProduct[idx])
                  .then((response) => {
                     setItemRemove([
                        ...itemRemove,
                        response.data,
                     ]);

                  })
                  .catch((error) => {
                     console.log(error, error.response);
                  })
               return false;
            }
            //Giữ nguyên phần tử
            return true;
         })
         setItemProduct(listNew)
      })
      products.splice(index, 1)
   }

   return (
      <table className="table table-hover ">
         <TableHead>
            <TableRow >
               <TableCell>ID</TableCell>
               <TableCell>Tên sản phẩm</TableCell>
               <TableCell>Hình ảnh</TableCell>
               <TableCell>Hãng</TableCell>
               <TableCell>Giá</TableCell>
               <TableCell>Xếp hạng *</TableCell>
               <TableCell></TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            {productNew == "" ? itemSearch.map((value, index) => {
               return (
                  <TableRow key={index} onClick={(event) => { onClickHandler(event, index, value) }}>
                     <TableCell>{value.id}</TableCell>
                     <TableCell>{value.name}</TableCell>
                     <TableCell>{value.image}</TableCell>
                     <TableCell>{value.description}</TableCell>
                     <TableCell>{value.price}</TableCell>
                     <TableCell>{value.rating}</TableCell>
                     <TableCell><button onClick={(event) => { onDelete(event, value, index) }}
                        className="btn btn-primary">Xóa</button></TableCell>
                  </TableRow>
               )
            }) : (
               productNew.length==8 ?  itemSearch.map((value, index) => {
                  return (
                     <TableRow key={index} onClick={(event) => { onClickHandler(event, index, value) }}>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.image}</TableCell>
                        <TableCell>{value.description}</TableCell>
                        <TableCell>{value.price}</TableCell>
                        <TableCell>{value.rating}</TableCell>
                        <TableCell><button onClick={(event) => { onDelete(event, value, index) }}
                           className="btn btn-primary">Xóa</button></TableCell>
                     </TableRow>
                  )
               }) : 
               productNew.map((value, index) => {
                  return (
                     <TableRow key={index} onClick={(event) => { onClickHandler(event, index, value) }}>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.image}</TableCell>
                        <TableCell>{value.description}</TableCell>
                        <TableCell>{value.price}</TableCell>
                        <TableCell>{value.rating}</TableCell>
                        <TableCell><button onClick={(event) => { onDelete(event, value, index) }}
                           className="btn btn-primary">Xóa</button></TableCell>
                     </TableRow>
                  )
               })
            )
         
         }

         </TableBody>
      </table>
   );
}
FormTable.propTypes = {
   itemSearch: PropTypes.arrayOf(
     PropTypes.shape({
       name: PropTypes.string.isRequired,
       image: PropTypes.string.isRequired,
       description: PropTypes.string.isRequired,
     })
   ).isRequired
 
 }
export default FormTable;