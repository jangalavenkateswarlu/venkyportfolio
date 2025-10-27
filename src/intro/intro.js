import React from "react";
import './intro.css';
import img from '../venkyimg.jpeg';
import { Link } from 'react-scroll';

const Intro = () =>{

    
  const handleHireMeClick = () => {
  window.location.href = "mailto:jangalav58@email.com?subject=Hiring%20Inquiry";
  };
    return(
        <section id="intro">
            <div className="introcontent">
              <span className="hello">Hello</span>
              <span className="text"> I'am Jangala Venkateswarlu Fullstack developer</span>
              <p className="para">currently seeking internship and job opportunities to start my professional journey. I’m eager to apply my technical knowledge, learn new skills, and contribute to real-world projects. I value teamwork, creativity, and continuous improvement, and I’m always motivated to take on new challenges that help me grow personally and professionally.</p>
              <Link>
              <button onClick={handleHireMeClick} className="btn"> Hire Me</button>
            </Link>
         </div>
         <div className="img">
            <img src={img} alt="portfolio" className="bg"/>
         </div>
        </section>

    )

}
export default Intro;