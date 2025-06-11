import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import {ShopContext} from '../../Context/ShopContext'
import  nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const [active_nav,setActive_nav] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef()

    const dropdown_toggle =(e)=>{
         menuRef.current.classList.toggle('nav-menu-visible')
         e.target.classList.toggle("open")
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <Link to="/"><img src={logo}/></Link>
            <p>SHOPPER</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setActive_nav("shop")}}> <Link style={{textDecoration:'none'}} to="/"> Shop</Link> <hr className={active_nav==="shop" ? "active-nav" : ""} /></li>
            <li onClick={()=>{setActive_nav("mens")}}> <Link style={{textDecoration:'none'}} to="/mens">Mens</Link> <hr className={active_nav==="mens" ? "active-nav" : ""} /></li>
            <li onClick={()=>{setActive_nav("womens")}}> <Link style={{textDecoration:'none'}} to="/womens">Womens</Link> <hr className={active_nav==="womens" ? "active-nav" : ""} /></li>
            <li onClick={()=>{setActive_nav("kids")}}> <Link style={{textDecoration:'none'}} to="/kids">Kids</Link> <hr className={active_nav==="kids" ? "active-nav" : ""} /></li>
        </ul>
        <div className="nav-login-cart">
            <Link style={{textDecoration:'none'}} to="/login"><button>Login</button></Link>
            <Link style={{textDecoration:'none'}} to="/cart"><img src={cart_icon} /></Link>
            <div className="nav-cart-count">
                {getTotalCartItems()}
            </div>
        </div>
        </div>
  )
}

export default Navbar