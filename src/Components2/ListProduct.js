import React, { Component, useEffect, useState } from 'react';
import FormControl from './FormControl'
import FormCreate from './FormCreate'
import FormTable from './FormTable'
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import ApiCaller from '../AxiosUtils/ApiCaller'
import { includes, filter, orderBy as funcOrderBy, remove } from 'lodash';
import axios from 'axios'
import ItemRemove from './ItemRemove'

function ListProduct() {
   const [click, setClick] = useState(-1);
   const formDataInitvalues = { id: "", name: "", image: "", description: "", price: "", rating: "" };
   const [data, setData] = useState(formDataInitvalues);
   const [itemProduct, setItemProduct] = useState("")
   const [itemRemove, setItemRemove] = useState([])
   const [Cate,setCate]= useState("")
  ///ẩn hiện button ADD(close)
  const [stateForm, setStateForm] = useState(false);
   // products.splice(0)
   //Phân trang
   const limit = 8;
   const maxLimit =itemProduct.length-1;
   const UrlParams = new URLSearchParams(window.location.search)
   const pageInit = UrlParams.get("page") != null ? UrlParams.get("page") : 1
   const [page, setPage] = useState(pageInit)

   const nextPage = () => {
      if(page>=maxLimit){
         return
      }
      setPage(page + 1);
      setStateForm(false)
   }
   const prevPage = () => {
      if (page == 1) {
         return;
      }
      setPage(page - 1);
      setStateForm(false)
   }
   // API
   useEffect(() => {
      ApiCaller("my_Asm?limit=" + limit + "&page=" + page, "GET", null).then(response => {
         const { data } = response
         setItemProduct(data)
      })
   }, [page])

   //ẩn hiện button ADD(close)
   const hideState = () => {
      if (!stateForm) {
         setStateForm(true)
         onClear()
      } else {
         setStateForm(false)
         onClear()
      }
   }
   //search
   const [searchInput, setSearchInput] = useState("");

   const handlerSearch = (value) => {
      setSearchInput(value)
   }
   //search1 theo key

   let itemSearch = [];
   itemSearch = filter(itemProduct, (item) => {
      return includes(item.name.toLowerCase(), searchInput)
   });
   //sort
   const [orderBy1, setOrderBy] = useState("Name");
   const [orderDir1, setOrderDir] = useState("desc");

   const handleSort = (orderBy, orderDir) => {
      setOrderBy(orderBy)
      setOrderDir(orderDir)

   }
   itemSearch = funcOrderBy(itemSearch, [orderBy1], [orderDir1]);

   //clearForm
   const onClear = () => {
      setData({ id: "", name: "", image: "", description: "", price: "", rating: "" })
      setClick(-1)
   }
   let [productNew, setproductNew] = useState("");

   const onFilter = (hang) => {
      let filter = []
      itemSearch.map((value, index) => {
         if (value.description == hang) {
            filter.push(value)
         }else if (hang == "Tatca"){
            filter.push(itemSearch)
         }
 
      })
      setproductNew(filter)
   }
   let showStateForm = null;
   if (stateForm) {
      showStateForm = <FormCreate
         onClear={onClear}
         Cate={Cate}
         setItemProduct={setItemProduct}
         itemProduct={itemProduct}
         setStateForm={setStateForm}
         data={data}
         setData={setData}
         click={click}
         setClick={setClick} />
   }

   const [stateRemove, setstateRemove] = useState(false);
   //ẩn hiện button ADD(close)
   const hideStateRemove = () => {
      if (!stateRemove) {
         setstateRemove(true)
      } else {
         setstateRemove(false)
      }
   }
   let showStateRemove = null;
   if (stateRemove) {
      showStateRemove = <ItemRemove
        itemProduct={itemProduct}
         setItemProduct={setItemProduct}
         itemRemove={itemRemove}
         setItemRemove={setItemRemove} />
   }
  // API
  useEffect(() => {
   ApiCaller("Category", "GET", null).then(response => {
      const { data } = response
      setCate(data)
   })
}, [])

   return (
      <div className='container'>
         <article>
            <h1 className="card-title mt-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
               Quản lí sản phẩm</h1>
            <FormControl
               onFilter={onFilter}
               itemSearch={itemSearch}
               itemProduct={itemProduct}
               setItemProduct={setItemProduct}
               Cate={Cate}
               onClickSort={handleSort}
               orderBy={orderBy1}
               orderDir={orderDir1}
               handlerSearch1={handlerSearch}
               isStateForm={stateForm}
               hideState={hideState} />

            {showStateForm}
            <div className="row">
               <div className="col-md-10 col-lg-12 col-xs-12">
                  <FormTable
                  productNew={productNew}
                     itemRemove={itemRemove}
                     setItemRemove={setItemRemove}
                     itemSearch={itemSearch}
                     data={data}
                     itemProduct={itemProduct}
                     setItemProduct={setItemProduct}
                     setStateForm={setStateForm}
                     setData={setData}
                     setClick={setClick}
                     // products={products} 
                     />
               </div>
            </div>
         </article>
         <div className="row">
            <ul className="pagination mt-4 col-lg-10" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
               <li className="page-item"><a className="page-link bg-info" style={{ fontSize: 20 }} onClick={prevPage}>Trang trước</a> </li>
               <li className="page-item"><a className="page-link" style={{ fontSize: 20 }}> {page}</a> </li>
               <li className="page-item"><a className="page-link bg-info" style={{ fontSize: 20 }} onClick={nextPage}>Trang sau</a> </li>
            </ul>
            <span className="right col-lg-2 mt-4">
               <a onClick={hideStateRemove}
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip" data-placement="top"
                  title="" data-original-title="Add to Cart">
                  <i className="fa fa-trash"></i>
               </a>
            </span>
         </div>
         {showStateRemove}
      </div>
   );
}
// const mapStateToProps = state => {
//    return {
//       products: state.Products
//    }
// }
export default (ListProduct);
// export default connect(mapStateToProps, null)(ListProduct);