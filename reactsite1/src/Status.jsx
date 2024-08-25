import React, { useEffect, useRef } from "react";
import "./index.css"

export default function Status (){

  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return(
    <>
    <h4 className="special">Hospital Status</h4>
    <br />
    <div className="st-icons">
      <section ref={(el) => (sectionRefs.current[0] = el)}>
      <img src="../public/img/undraw_Scientist_ft0o.pngg" alt="scientist" />
      <br />
      <br />
      <h4>Research Labs</h4>
      <h3>32</h3>
      </section>

      <section ref={(el) => (sectionRefs.current[1] = el)}>
      <img src="../public/img/undraw_medical_research_qg4d.png" alt="departments" />
      <br />
      <br />
      <h4>Departments</h4>
      <h3>15</h3>
      </section>

      <section ref={(el) => (sectionRefs.current[2] = el)}>
      <img src="../public/img/undraw_doctor_kw5l.png" alt="" />
      <br />
      <br />
      <h4>Consultants</h4>
      <h3>43</h3>
      </section>
     
      <section className="fourthpicture" ref={(el) => (sectionRefs.current[3] = el)}>
      <img src="../public/img/undraw_medicine_b1ol.png" alt="doctors" />
      <br />
      <br />
      <h4>Doctors</h4>
      <h3>50</h3>
      </section> 
    
     
    </div>
    </>
  )   
}