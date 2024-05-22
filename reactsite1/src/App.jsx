import "./index.css";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Footer from "./Footer";
import Services from "./Services";
import Speciality from "./Specialityareas";
import Status from "./Status";

export default function App() {
  return (
   
      <div>
        <Navbar />
        <Slider />
        <Services/>
        <br />
        <Speciality/>
        <br />
        <Status/>
       
       
        <Footer />
      </div>
   
  );
}
