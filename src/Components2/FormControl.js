import React, { Component, useEffect, useState } from 'react';
import ListProduct from './ListProduct'
import ApiCaller from '../AxiosUtils/ApiCaller'
import PropTypes from 'prop-types';

function FormControl({ hideState, isStateForm, handlerSearch1,
   onClickSort, orderBy, orderDir, products, itemProduct, setItemProduct, itemSearch, onFilter
}) {
   //hideBtnADD
   let elmButton = <button onClick={hideState} variant="outlined" className="btn-block bg-success form-control col-4 ml-2">
      Thêm sản phẩm
   </button>
   if (isStateForm) {
      elmButton = <button onClick={hideState} variant="outlined" className="btn-block bg-success form-control col-4 ml-2">
         Close
   </button>
   }
   const [searchInput, setSearchInput] = useState("");
   const handlerSearch = (event) => {
      setSearchInput(event.target.value)
   }
   const clickSearch = () => {
      //console.log(searchInput);
      handlerSearch1(searchInput)
   }
   const clearSearch = () => {
      setSearchInput("")
      handlerSearch1("")
   }
   //sort
   const handleSort = (orderBy, orderDir) => {
      //console.log("Handle Sort :" + orderBy + "-" + orderDir);
      onClickSort(orderBy, orderDir)
   }
   //filter
   let [productNew, setproductNew] = useState("");
   // API
   useEffect(() => {
      ApiCaller("my_Asm", "GET", null).then(response => {
         const { data } = response
         setproductNew(data)
      })
   }, [])

   let filterProducts = (hang) => {
      onFilter(hang)
   }

   return (
      <div className="row mt-5" >
         <div className="col-md-5">
            <div className="input-group">
               <input type="text" value={searchInput} onChange={handlerSearch} name="searchInput" className="form-control" placeholder="Search name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
               <div className="input-group-append">
                  <button onClick={clickSearch} className="btn btn-danger" type="button">Go</button>
                  <button onClick={clearSearch} className="btn btn-warning" type="button">Clear</button>
               </div>
            </div>
         </div>
         <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Sort by
        </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
               <button onClick={() => handleSort("name", "esc")} className="dropdown-item" type="button">Name Esc</button>
               <button onClick={() => handleSort("name", "desc")} className="dropdown-item" type="button">Name Desc</button>
               <button onClick={() => handleSort("description", "desc")} className="dropdown-item" type="button">Hãng Z-A</button>
               <button onClick={() => handleSort("description", "esc")} className="dropdown-item" type="button">Hãng A-Z</button>
            </div>

         </div>
         <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Fillter
        </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
               <button onClick={() => { filterProducts("Tatca") }} className="dropdown-item" type="button">Tất cả</button>
               <button onClick={() => { filterProducts("Apple") }} className="dropdown-item" type="button">Apple</button>
               <button onClick={() => { filterProducts("Samsung") }} className="dropdown-item" type="button">Samsung</button>
               <button onClick={() => { filterProducts("Oppo") }} className="dropdown-item" type="button">Oppo</button>
            </div>
         </div>
         {elmButton}

      </div>
   );
}

export default FormControl;