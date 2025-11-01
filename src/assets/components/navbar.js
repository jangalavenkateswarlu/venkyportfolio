import React, { useState } from "react";
import './navbar.css';
import { Link } from 'react-scroll';
import menu from '../menu.png';


const Navbar = () =>{
     const [showMenu,setShowMenu] = useState(false);
    return(
        <nav className="navbar">
           <div className="deskstopMenu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-250} duration={500} className="Menulist">Home</Link>
            <Link  activeClass="active" to="skill" spy={true} smooth={true} offset={-100} duration={500} className="Menulist">About</Link>
            <Link  activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="Menulist">Portfolio</Link>
            <Link  activeClass="active" to="certificates" spy={true} smooth={true} offset={-100} duration={500} className="Menulist">Certificates</Link>
           </div>
           <button className="btn1" onClick={() =>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'});
           }}>Contact Me</button>
           <img src={menu} alt="Menu" className="mobmenu" onClick={()=>setShowMenu(!showMenu)}/>
           <div className="navmenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-250} duration={500} className="Menulist" onClick={() =>setShowMenu(false)}>Home</Link>
            <Link  activeClass="active" to="skill" spy={true} smooth={true} offset={-100} duration={500} className="Menulist" onClick={() =>setShowMenu(false)}>About</Link>
            <Link  activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="Menulist" onClick={() =>setShowMenu(false)}>Portfolio</Link>
            <Link  activeClass="active" to="certificates" spy={true} smooth={true} offset={-100} duration={500} className="Menulist" onClick={() =>setShowMenu(false)}>Certificates</Link>
           </div>
           
           {/* <span className="portc">Portfolio</span> */}
           <Link  activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="portc" onClick={() =>setShowMenu(false)}>Portfolio</Link>
          
        </nav>
    )
}

export default Navbar;