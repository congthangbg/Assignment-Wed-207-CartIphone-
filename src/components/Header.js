import React, { Component, useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer } from '@material-ui/core'
import { Menu, AccountCircle } from '@material-ui/icons'
import ApiCaller from '../AxiosUtils/ApiCaller'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux'
import { actChangeMessage2} from '../Actions/index';
function Header({message2,onChangeMessageFilter,logout}) {
  const [open, setOpen] = useState(false)
  const [anchor, setAnchor] = useState('left')
  const handleDrawer = () => {
    setOpen(true)
    setAnchor('left')
  }
  const onApple=(value) => {
    onChangeMessageFilter(value)

  }

  const [listCate,setListCate] = useState("")
  // API
  useEffect(() => {
    ApiCaller("Category", "GET", null).then(response => {
       const { data } = response
       setListCate(data)
    })
 }, [])

  return (
    <header>

      <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">

        <div className="float-left">
          <a data-activates="slide-out" onClick={handleDrawer} className="button-collapse">
            <i className="fa fa-bars"> </i>
          </a>
        </div>
        <div className="breadcrumb-dn mr-auto">
          <ol className="breadcrumb header-breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/Mainproduct" >Trang chủ</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/ListProduct">Quản lý sản phẩm</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Category">Quản lý danh mục</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/MainCart">Giỏ hàng</Link>
            </li>
          </ol>
        </div>
        
        {/* <ul className=" nav navbar-nav nav-flex-icons ml-auto"> */}
        <div className="row mr-3">
        <Link to="/LoginForm"className="dropdown-item waves-effect waves-light">Đăng Nhập</Link>
            
        </div>  
        <div className="row mr-3">
        <Link to="/LoginForm" onClick={logout} className="dropdown-item waves-effect waves-light">Đăng Xuất</Link>
            
        </div> 
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              <i className="fa fa-user"></i> Tài Khoản</a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
              <Link to="/LoginForm"className="dropdown-item waves-effect waves-light">Đăng Nhập</Link>
              <Link to="/LoginForm" className="dropdown-item waves-effect waves-light">Đăng Xuất</Link>
            </div>
          </li> */}
        {/* </ul> */}
      </nav>
      <Drawer anchor={anchor}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div  style={{ height: "100%", padding: "20px" }}>
          {anchor == 'left' ?
            <ul id="slide-out" className="hidden custom-scrollbar " data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
              <li>
                <div className="logo-wrapper waves-light waves-effect waves-light">
                  <a>
                    <img src="https://investone-law.com/wp-content/uploads/2019/08/thuong-hieu-dien-thoai-768x215.png" alt="" width="300px" className="img flex-center" />
                  </a>
                </div>
              </li>
              <li>
                <ul className="social row flex-center mt-3">
                  <li>
                    <a className="icons-sm fb-ic">
                      <i className="fa fa-facebook"> </i>
                    </a>
                  </li>
                  <li>
                    <a className="icons-sm pin-ic">
                      <i className="fa fa-pinterest"> </i>
                    </a>
                  </li>
                  <li>
                    <a className="icons-sm gplus-ic">
                      <i className="fa fa-google-plus"> </i>
                    </a>
                  </li>
                  <li>
                    <a className="icons-sm tw-ic">
                      <i className="fa fa-twitter"> </i>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <form className="search-form" role="search">
                  <div className="form-group waves-light waves-effect waves-light">
                    <input type="text" className="form-control"  />
                  </div>
                </form>
              </li>
              <ul className="collapsible collapsible-accordion">
                <li>
                  <Link to="/Mainproduct" className="collapsible-header waves-effect arrow-r">
                    <i className="fa fa-shopping-bag" /> Danh sách sản phẩm
                  </Link>
                </li>
              </ul>
              <ul className="collapsible collapsible-accordion">
                <li>
                  <Link to="/ListProduct" className="collapsible-header waves-effect arrow-r">
                    <i className="fa fa-shopping-bag" /> Quản lý sản phẩm
                  </Link>
                </li>
              </ul>
              <ul className="collapsible collapsible-accordion">
                <li>
                  <Link to="/Category" className="collapsible-header waves-effect arrow-r">
                    <i className="fa fa-shopping-bag" /> Quản lý danh mục
                  </Link>
                </li>
              </ul>
              <ul className="collapsible collapsible-accordion">
                <li>
                  <Link to="/MainCart" className="collapsible-header waves-effect arrow-r ">
                    <i className=" fa fa-shopping-cart" />  Giỏ hàng
                  </Link>
                </li>
              </ul>
              {listCate?(
                listCate.map((value, index)=>{
                  return(
                    <ul className="collapsible collapsible-accordion" key={index}>
                <li>
                  <Link to="/Mainproduct" onClick={() =>onApple(value.name)}  className="collapsible-header waves-effect arrow-r">
                    <i className="fa fa-mobile" />  {value.name}
                  </Link>
                </li>
              </ul>
                  )
                })
              ):("")}
              {/* <ul className="collapsible collapsible-accordion">
                <li>
                  <Link to="/Mainproduct" onClick={onSamsung} className="collapsible-header waves-effect arrow-r">
                  <i className="fa fa-mobile"></i>  Samsung
                  </Link>
                </li>
              </ul>
              <ul className="collapsible collapsible-accordion">
                <li>
                  <Link to="/Mainproduct" onClick={onOppo} className="collapsible-header waves-effect arrow-r">
                  <i className="fa fad fa-mobile"></i>  Oppo
                  </Link>
                </li>
              </ul> */}
            </ul>
            : ""
          }
        </div>

      </Drawer>
    </header>
  );
}
const mapStateToProps = state => {
  return {
    message2 : state.Message2
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeMessageFilter : (message1) => {
      dispatch(actChangeMessage2(message1))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);



