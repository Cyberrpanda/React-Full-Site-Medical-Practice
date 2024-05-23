import "./index.css"
import { Link } from "react-router-dom";

export default function Navbar () {
  return(
   
    
    <div className="head">
       
        <img className="logo" src="../img/Gemini_Generated_Image__1_-removebg-preview.png"  alt="Logo"/>
       
       
        <nav className="menubar">
          <ul>
            <li>
              <Link to ="/home">Home</Link>
            </li>
            <li>
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
        </nav>       
      </div>

   
  )  
}