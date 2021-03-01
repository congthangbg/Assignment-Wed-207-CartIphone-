import React, { Component, useEffect } from 'react';
import { TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import ApiCaller from '../AxiosUtils/ApiCaller'
import axios from 'axios'
import PropTypes from 'prop-types';
function ItemRemove({itemRemove,setItemRemove,products,setItemProduct}) {
   
   const onItemRemove=(event,value,index) =>{
      const createProduct = "https://60122a3f5fffd8001708945f.mockapi.io/api/v1/my_Asm"
         axios.post(createProduct, value)
            .then((response) => {
               const { data}= response
               setItemProduct([
                  ...products,
                  response.data,
               ]);
               products.push(data)
              //
              ApiCaller("itemRemove/"+value.id, "delete",null).then(response => {
               const listNew = itemRemove.filter((val, idx) => {
                  if (idx === index) {
                     //Loại bỏ phần tử
                     return false;
                  }
                  //Giữ nguyên phần tử
                  return true;
               })
               setItemRemove(listNew)
            })
            })
            .catch((error) => {
               console.log(error, error.response);
            })

      }
      const onDelete=(event, value, index) => {
         event.stopPropagation();
         ApiCaller("itemRemove/"+value.id, "delete",null).then(response => {
            const listNew = itemRemove.filter((val, idx) => {
               if (idx === index) {
                  //Loại bỏ phần tử
                  return false;
               }
               //Giữ nguyên phần tử
               return true;
            })
            setItemRemove(listNew)
         })
      }
     
   // API
   useEffect(() => {
      ApiCaller("itemRemove", "GET", null).then(response => {
         const { data } = response
         setItemRemove(data)
      })
   }, [])
      return (
         <div className='container'>
         <article>
            <h1 className="card-title mt-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
               Quản lí sản phẩm đã xóa</h1>
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
            {itemRemove.map((value, index) => {
               return (
                  <TableRow key={index}>
                     <TableCell>{value.id}</TableCell>
                     <TableCell>{value.name}</TableCell>
                     <TableCell>{value.image}</TableCell>
                     <TableCell>{value.description}</TableCell>
                     <TableCell>{value.price}</TableCell>
                     <TableCell>{value.rating}</TableCell>
                     <TableCell><button onClick={(event) => { onItemRemove(event, value, index) }}
                        className="btn btn-primary">Khôi phục</button></TableCell>
                     <TableCell><button onClick={(event) => { onDelete(event, value, index) }}
                        className="btn btn-primary">Xóa</button></TableCell>
                  </TableRow>
               )
            })}

         </TableBody>
      </table>
         </article>
      </div>
      );
   }

   ItemRemove.propTypes = {
      itemRemove: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired
    
    }

export default ItemRemove;