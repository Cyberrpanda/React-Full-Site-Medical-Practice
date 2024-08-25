import React, { useEffect, useRef } from "react";
import "./index.css";

export default function Speciality() {

  const cardsRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    cardsRefs.current.forEach((cards) => {
      if (cards) observer.observe(cards);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <>
      
     <div className="add">
      <br />
      
     <h4 className="specials">Our World Recognized Doctors</h4>
      <br />

     <div className="card-holder">
        <div className="card cards size mb-3"  ref={(el) => (cardsRefs.current[0] = el)}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="../public/img/team-4.jpg"
                className="img-fluid rounded-start"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card cards size mb-3"  ref={(el) => (cardsRefs.current[1] = el)}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="../public/img/team-3.jpg"
                className="img-fluid rounded-start"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-holder">
        <div className="card cards size mb-3"  ref={(el) => (cardsRefs.current[2] = el)}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="../public/img/team-1.jpg"
                className="img-fluid rounded-start"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card cards size mb-3"  ref={(el) => (cardsRefs.current[3] = el)}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="../public/img/team-2.jpg"
                className="img-fluid rounded-start"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     </div>
      
    </>
  );
}
