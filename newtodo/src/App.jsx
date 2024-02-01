import { useState, useEffect } from "react";
import "./index.css";
import Slider from "./slider";

export default function maincontent() {
  return (
    <>
      <div className="head">
        <nav className="menubar">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Pages</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="nav-right">
          <button className="button-appoint">Appointment</button>
        </div>
        <Slider></Slider>
      </div>
    </>
  );
}
