import React from "react";
import './skills.css';
import webimg from '../webimg.jpg';
import pythonimg from '../pythonimg.jpg';
import javaimg from '../javaimg.png';
 

const Skills = () =>{
  const handleResumeClick = () => {
    // Opens the resume in a new browser tab
    window.open("/venkyresume.pdf", "_blank");
  };

        return(
            <section id="skill">
              <span className="title">About Me</span>      
              <span className="des">Hi! I'm Jangala Venkateswarlu, currently a 2nd-year student pursuing my degree at VVIT College, Guntur. I am from Kopperapadu, where I completed my 10th grade. I completed my 12th grade in Addanki, securing an EAPCET rank of 36672, which led me to join VVIT. I am passionate about technology and continuously learning new skills to work on innovative projects. I enjoy problem-solving, exploring new tools, and developing my technical and communication abilities.  I am proficient in HTML , CSS and javascript,Reactjs, as well as I have commond on a programming languages like C , Python and Java </span>
               <button onClick={handleResumeClick} className="resume">
                Check My Resume</button>  
            <div className="skillbars">
              <div className="skillbar">
                 <img src={webimg} alt="Web development" className="webimg"/>
                <div className="skilltext">
                 <h2>Web design</h2>
                 <p>These programming languages are used to create user eco-friendly websites.</p>
                </div>
              </div>
              <div className="skillbar">
                <img src={pythonimg} alt="python" className="pyimg"/>
               <div className="skilltext">
                <h2>Python Fundamentals</h2>
                <p>Python is a high-level, interpreted, and general-purpose programming language known for its simplicity, readability, and versatility, widely used in web development, data analysis, automation, and artificial intelligence.</p>
               </div>
              </div>
              <div className="skillbar">
                <img src={javaimg} alt="java" className="javaimg"/>
                <div className="skilltext">
                    <h2>Java Fundamentals</h2>
                    <p>Java is a high-level, object-oriented, and platform-independent programming language widely used for building web applications, mobile apps, and enterprise software.</p>
                </div>
              </div>
          </div>    
          </section>
        )


}
export default Skills;