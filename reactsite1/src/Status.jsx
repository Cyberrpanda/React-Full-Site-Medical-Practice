import "./index.css"

export default function Status (){
  return(
    <>
    <h4 className="special">Hospital Status</h4>
    <br />
    <div className="st-icons">
      <p>
      <img src="../img/undraw_Scientist_ft0o.png" alt="scientist" />
      <br />
      <br />
      <h4>Research Labs</h4>
      <h3>32</h3>
      </p>

      <p>
      <img src="../img/undraw_medical_research_qg4d.png" alt="departments" />
      <br />
      <br />
      <h4>Departments</h4>
      <h3>15</h3>
      </p>

      <p>
      <img src="../img/undraw_doctor_kw5l.png" alt="" />
      <br />
      <br />
      <h4>Consultants</h4>
      <h3>43</h3>
      </p>
     
      <p>
      <img src="../img/undraw_medicine_b1ol.png" alt="doctors" />
      <br />
      <br />
      <h4>Doctors</h4>
      <h3>50</h3>
      </p> 
    
     
    </div>
    </>
  )   
}