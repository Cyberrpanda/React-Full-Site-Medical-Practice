import "./index.css";

export default function Slider() {
  return (
    <>
      <h1>hello</h1>
      <section aria-label="newestphotos">
        <div className="carousel">
          <ul>
            <li className="slide">
              <img src="../img/carousel-1.jpg" alt="carousel1" />
            </li>
            <li className="slide">
              <img src="../img/carousel-2.jpg" alt="carousel2" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
