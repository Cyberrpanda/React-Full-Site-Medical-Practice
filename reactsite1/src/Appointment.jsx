import "./index.css"
import Footer from "./footer";
import "./assets/bootstrap-5.3.0-alpha1-dist/css/bootstrap.min.css"
export default function Appoint () {
   return(
   <>
  
      <div className="head">
       <>
        <img className="logo" src="../img/Gemini_Generated_Image__1_-removebg-preview.png" />
       </>
       
        <nav className="menubar">
          <ul>
            <li >
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Pages</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>       
      </div>

      <br />
      <br />
      <br />
       <div className="appointarea">
        <div className="appoint">

           <img src="../img/30408.jpg" alt="regdis" className="regdis" />

            

            <form action="" className="form">
                  <label htmlFor="" >Fullname</label>
                  <br />
                  <input type="text"  className="form-control"  placeholder="Fullname"/>
                  <br />
                  <label htmlFor="" >Email Address</label>
                  <br />
                  <input type="email" className="form-control"  placeholder="patient@gmail.com"/>
                  <br />
                  <label htmlFor="" >Confirm Email Address</label>
                  <br />
                  <input type="email" className="form-control"  placeholder="patient@gmail.com"/>
                  <br />
                  <label htmlFor="" >Password</label>
                  <br />
                  <input type="password"  className="form-control" placeholder="*******" />
                  <br />
                  <label htmlFor="" >Confirm Password</label>
                  <br />
                  <input type="password" className="form-control" placeholder="*******" />
                  <br />
                  <label htmlFor="" >Date of Birth</label>
                  <br />
                  <input type="date" className="form-control" />
                  <br />
                  <label htmlFor="" >Gender</label>
                  <br />
                  <select className="form-control">
                  <option value="0"></option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                  </select>
                  <br />
                  
                  <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
     
      </div>

     
   
      <br />
      <br />
      <div>
        <Footer></Footer>
      </div>

   </>
    
   )


}
