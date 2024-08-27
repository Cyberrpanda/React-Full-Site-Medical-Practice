import "./index.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./assets/bootstrap-5.3.0-alpha1-dist/css/bootstrap.min.css"
export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="slider">
        <div className="pictureAndText">
          <img src="../img/work-like-balance-img3-min-1050x555.jpg" alt="slide1" />

          <div className="intro-text ">
            <h1>Welcome to MediBridge</h1>
             <p>Providing a safe passage to better health ...</p>
            <a className="button-appoint btn btn-success" href="/appointment">
              Appointment
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider">
        <div className="pictureAndText">
            <img src="../img/pexels-artem-podrez-5726850.jpg" alt="slide2" />

            <div className="intro-text ">
            <h1>Welcome to MediBridge</h1>
            <p>Providing a safe passage to better health ...</p>
            <a className="button-appoint btn btn-success" href="/appointment">
              Appointment
            </a>
          </div>
        </div>
       
      </SwiperSlide>
    </Swiper>
  );
}
