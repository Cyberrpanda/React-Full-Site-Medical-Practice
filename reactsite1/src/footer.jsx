import "./index.css"

export default function Footer() {
  return(
    <>
     <div className="footer">
       
       <div className="footcontent">
        <img className="logo" src="../img/Gemini_Generated_Image (1).jpg" alt="logo" />
        <br />
        <p>
          <h5>MediBridge</h5>
          <br />
          Providing a safe passage to better health ...</p>
       </div>

        <div className="footcontent">
              <h6>Site Content</h6>
              <br />
              <ul>
                <li>Lorem ipsum </li>
                <br />
                <li>Lorem ipsum </li>
                <br />
                <li className="footexe">Lorem ipsum </li>
                <br />
                <li className="footexe">Lorem ipsum </li>
                <br />
                
              </ul>
        </div>


        <div className="footcontent footexe">

            <h6>Our Services</h6>
              <br />
              <ul>
                <li>Lorem ipsum </li>
                <br />
                <li>Lorem ipsum </li>
                <br />
                <li>Lorem ipsum </li>
                <br />
                <li>Lorem ipsum </li>
                <br />
                
              </ul>

        </div>


       <div className="footcontent footexe">
        
        <h6>Join Our Newsletter</h6>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br />elit. Aut veniam a provident cum <br />
        molestias accusamus id,</p>

       </div>
     </div>

    </>
  )
}