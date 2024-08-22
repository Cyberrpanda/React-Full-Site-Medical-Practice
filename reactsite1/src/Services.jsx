import React, { useEffect, useRef } from "react";
import "./index.css";

export default function Services (){
 
    
 return(
    <>
        <h4 className="service">Our Services</h4>

        <div className="card-holder">
            
            <div className="card ">
                <img src="../img/undraw_Doctors_p6aq (1).png" alt="doctors" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>  
                <p className="card-text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam dolor consequatur facere quam ipsam sed dicta ratione sequi soluta, exercitationem aut, molestiae enim ipsa tempore quidem voluptate, fugiat sint!</p>
                </div>

            </div>

            <div className="card ">
                <img src="../img/undraw_Interview_re_e5jn (1).png" alt="interviews" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p className="card-text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam dolor consequatur facere quam ipsam sed dicta ratione sequi soluta, exercitationem aut, molestiae enim ipsa tempore quidem voluptate, fugiat sint!</p>
                </div>

            </div>

            <div className="card ">
                <img src="../img/undraw_medical_care_movn (1).png" alt="doctors" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p className="card-text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam dolor consequatur facere quam ipsam sed dicta ratione sequi soluta, exercitationem aut, molestiae enim ipsa tempore quidem voluptate, fugiat sint!</p>
                </div>

            </div>
            
            <span className="excess">
            <div className="card ">
                <img src="../img/undraw_injured_9757.png" alt="injured" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam dolor consequatur facere quam ipsam sed dicta ratione sequi soluta, exercitationem aut, molestiae enim ipsa tempore quidem voluptate, fugiat sint!</p>
                </div>

            </div>
            </span>
            

        </div>
 </>
 )

}