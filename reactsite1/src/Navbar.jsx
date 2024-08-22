import "./index.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";

export default function Navbar () {

 const navRef = useRef();

 const [navIsOpen , setNavIsOpen] = useState(false);


 const showNavbar = () => {
   setNavIsOpen(!navIsOpen);
 };

 const closeNavbar = () => {
  setNavIsOpen(false);
};

  return(
   
    <header className="head">
        <Link to ="/home"><img className="logo" src="../img/Gemini_Generated_Image__1_-removebg-preview.png"  alt="Logo"/></Link>
       
        <nav ref={navRef} className={`menubar ${navIsOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to ="/home" onClick={closeNavbar}>Home</Link>
            </li>
            <li >
              <a href ="#services" onClick={closeNavbar}>Services</a>
            </li>
            <li>
              <a href ="#speciality" onClick={closeNavbar}>Specialists</a>
            </li>
            <li>
              <a href ="#status" onClick={closeNavbar}>Status</a>
            </li>
            <li>
              <a href ="#footer" onClick={closeNavbar}>Contact Us</a>
            </li>
          </ul>
        </nav>
         
          
           <button className="nav-btn" onClick={showNavbar}>
            {navIsOpen ? <FaTimes /> : <FaBars />}
           </button>
         
         
             
      </header>

   
  );  
}