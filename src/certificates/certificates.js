import React from "react"; 
import './certificates.css';
import pycert from '../pycert.jpg';
import javacert from '../javacert.jpg';
import htmlcssjs from '../html,css,js.jpg';
import html from '../html.jpg';
import react from '../react js.jpg';
import gitgithub from '../git&github.jpg';
import nakuri from '../nakuri.jpg';
import bootstrap from '../bootstrap.jpg';

const Certificates = () =>{
    return(
    <section id="certificates">
        <h2 className="certtitle">MY CERTIFICATIONS</h2>
      <div>  
        <div className="certimg">
          <img src={pycert} alt="pythoncert" className="pyct"/>
          <img src={javacert} alt="javacert" className="javact"/>
          <img src={htmlcssjs} alt="htmlcssjs" className="threect"/>
          <img src={html} alt="htnl" className="htmlct"/>
          <img src={react} alt="react" className="reactct"/>
          <img src={gitgithub} alt="gitgithub" className="gitct"/>
          <img src={nakuri} alt="nakuri" className="nakurict"/>
          <img src={bootstrap} alt="bootstrap" className="bootct"/>
        </div>
     </div>
    </section>
    )
}
export default Certificates;