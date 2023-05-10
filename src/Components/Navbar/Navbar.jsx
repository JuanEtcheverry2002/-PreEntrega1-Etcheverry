import React from "react";
import CartWidget from "../CartWidget";
import './navbar.css'
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
      <div className="navbar">
      
      
      <p className="navbar__title">ZapatosOnline</p>
      <div className="navbar__category">
        <Link to={"/"}>Catalogo</Link>
        <Link to={"/category/1"}>Acerca Nuestro</Link>
        
      </div>

      <CartWidget />
    </div>
)
} 
export default Navbar