import "./index.css";

import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

export default function App() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 3,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container init="false" ref={swiperRef}>
      ...
    </swiper-container>
  );
}