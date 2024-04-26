import "./index.css";
import Navbar from "./Navbar";
import Slider from "./slider";
import Footer from "./footer";
import Services from "./Services";
import Speciality from "./Specialityareas";
import Status from "./Status";
import Location from "./Location";

export default function App() {
  return (
    <>
      
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <Slider></Slider>
      </div>
      

      <div>
          <Services></Services>
      </div>
      
      <br />
      <br />

      <div>
          <Speciality></Speciality>
      </div>
      <br />
      <div>
        <Status></Status>
      </div>

      <div>
        <Location></Location>
      </div>

      <br />
      <br />

      <div>
        <Footer></Footer>
      </div>
    </>
  );
}


