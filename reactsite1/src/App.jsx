import "./index.css";
import Slider from "./slider";
import Footer from "./footer";

export default function App() {
  return (
    <>
      <div className="head">
       <>
        <img className="logo" src="../img/Gemini_Generated_Image-removebg-preview.png" alt="logo" />
       </>
       
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
      </div>

      <div>
        <Slider></Slider>
      </div>
      
      <div className="secondth">
       
       
     

      </div>

      <div>
        <Footer></Footer>
      </div>
    </>
  );
}


