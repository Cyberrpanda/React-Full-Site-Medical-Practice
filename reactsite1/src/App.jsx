import "./index.css";
import Home from "./home";
import Navbar from "./Navbar";
import Slider from "./Slider-com";
import Footer from "./footer";
import Services from "./Services";
import Speciality from "./Specialityareas";
import Status from "./Status";

export default function App() {
  return (
    <div>
      <Home>
        <Navbar />
        <Slider />
        <Services />
        <br />
        <Speciality />
        <br />
        <Status />

        <Footer />
      </Home>
    </div>
  );
}
