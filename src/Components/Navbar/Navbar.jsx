import React from "react";
import CartWidget from "../CartWidget";
import './navbar.css'


const Navbar=()=>{
    return(
      <header className="header">
      <nav className="nav">
        <a href="#" className="brand">ZapatosOnline</a>
        <ul className="nav_menu">
          <li>
            <a className="nav_link" href="#">Inicio</a>
          </li>
          <li>
          <a className="nav_link" href="#">Acerca de nosotros</a>
          </li>
         
          <li>
          <a className="nav_link" href="#"> <CartWidget/> </a>
         
          </li>  
        </ul>
      </nav>

      
    </header>
)
} 
export default Navbar
