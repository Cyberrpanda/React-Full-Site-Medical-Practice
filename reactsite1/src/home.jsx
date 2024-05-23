import "./index.css";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Footer from "./footer";
import Services from "./Services";
import Speciality from "./Specialityareas";
import Status from "./Status";

export default function Home() {
  return (
   
      <div>
       
         <Navbar />
       
        <section id="slider">
         <Slider />
        </section>
        <section id="services">
         <Services/>
        </section>
        <br />
        <section id="speciality">
         <Speciality/>
        </section>
        <br />
        <section id="status">
         <Status/>
        </section>
        <section id="footer">
         <Footer />
        </section>
        
      </div>
   
  );
}
