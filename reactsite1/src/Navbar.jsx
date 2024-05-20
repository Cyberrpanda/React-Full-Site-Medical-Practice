import "./index.css"
import { Link } from "react-router-dom";

export default function Navbar () {
  return(
   
    
    <div className="head">
       
        <img className="logo" src="../img/Gemini_Generated_Image__1_-removebg-preview.png"  alt="Logo"/>
       
       
        <nav className="menubar">
          <ul>
            <li>
              <Link to ="/App">Home</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to ="/Specialityareas">Specialists</Link>
            </li>
            <li>
              <Link to ="/Status">Status</Link>
            </li>
            <li>
              <Link to ="/footer">Contact Us</Link>
            </li>
          </ul>
        </nav>       
      </div>

   
  )  
}