import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
       
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/specialists" element={<Speciality />} />
          <Route path="/status" element={<Status />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
        <Footer />
      </div>
   
  );
}
