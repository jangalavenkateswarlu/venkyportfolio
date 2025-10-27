import React from "react";
import './work.css';
import portf from './portf.jpg';
import ports from './ports.jpg';
import portt from './portt.jpg';
const Works = () =>{
    return(
        <section id="works">
        <h2 className="worktitle">My portfolio</h2>
        <span className="workdes">I take pride in playing attention to the smallest deatils and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="workimg">
            <img src={portf} alt="first" className="workfimg"/>
            <img src={ports} alt="second" className="worksimg"/>
            <img src={portt} alt="third" className="worktimg"/>
        </div>
        </section>
    )
}
export default Works;