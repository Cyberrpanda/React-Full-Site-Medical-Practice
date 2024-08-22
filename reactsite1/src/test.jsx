import "./index.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const navRef = useRef();
  const [navIsOpen, setNavIsOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.style.display = "block";
    setNavIsOpen(true);
  };

  const closeNav = () => {
    navRef.current.style.display = "none";
    setNavIsOpen(false);
  };

  return (
    <header className="head">
      <img
        className="logo"
        src="../img/Gemini_Generated_Image_1-removebg-preview.png"
        alt="Logo"
      />

      <nav ref={navRef} className="menubar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#speciality">Specialists</a>
          </li>
          <li>
            <a href="#status">Status</a>
          </li>
          <li>
            <a href="#footer">Contact Us</a>
          </li>
        </ul>
      </nav>
      
      {navIsOpen && (
      <button className="nav-btn" onClick={closeNav}>
        <FaTimes />
      </button>
      )}

      {!navIsOpen && (
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      )}
    </header>
  );
}