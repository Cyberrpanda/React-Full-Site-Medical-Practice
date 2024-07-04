import "./index.css"
import { useRef } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

export default function Navbar () {

 const navRef = useRef();

 const showNavbar = () => {
    navRef.current.classList.toggle("navbar");
 };

  return(
   
    <header className="head">
       
        <img className="logo" src="../img/Gemini_Generated_Image__1_-removebg-preview.png"  alt="Logo"/>
       
       
        <nav ref={navRef} className="menubar">
          <ul>
            <li>
              <Link to ="/home">Home</Link>
            </li>
            <li >
              <a href ="#services">Services</a>
            </li>
            <li>
              <a href ="#speciality">Specialists</a>
            </li>
            <li>
              <a href ="#status">Status</a>
            </li>
            <li>
              <a href ="#footer">Contact Us</a>
            </li>
          </ul>
          
          <button className="nav-btn nav-close" onClick={showNavbar}>
            <FaTimes/>
          </button>

        </nav>
         <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
         </button>       
      </header>

   
  )  
}