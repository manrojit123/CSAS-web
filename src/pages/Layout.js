import React, { useState } from 'react';

import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from '../assets/loog.webp';
import Collab1 from "../assets/collab1.webp";
import Collab2 from "../assets/collab2.webp";
import Collab3 from "../assets/collab3.webp";
import '../css/main.css';

const Layout = () => {
  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState(false);

  const handleNavToggle = () => {
    setShowNav(!showNav);
  };
  const handleLinkClick = () => {
    setShowNav(false);
  };
  // const handleCollapse = () =>{
  //   console.log("handleCollapse");
  //   var nav = document.getElementById("navmenu");
  //   var btn = document.getElementById("navbar-toggler");
  //   nav.classList.remove("show");
  //   btn.classList.add("collapsed");
  // };

  
  return (
    
    <>
      <div className="logo">
        <img alt="Vue logo" src={Logo} />
      </div>
    
      <nav className="navbar navbar-expand-lg">
        <div className="container nav-container">
           
        
        <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavToggle}
            aria-expanded={showNav ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
                  MENU
                {/* <span className="navbar-toggler-icon"></span> */}
            </button>

            <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`} id="navmenu">
                <ul className="navbar-nav mx-auto">
                    <li className={pathname === '/' ? 'nav-item active' : 'nav-item'}>
                      <Link  onClick={handleLinkClick} to="/" className="nav-link" >Home</Link>
                    </li>
                    <li className={pathname === '/about-us' ? 'nav-item active' : 'nav-item'}>
                      <Link  onClick={handleLinkClick} to="/about-us" className="nav-link">About us</Link>
                    </li>
                    <li className={pathname === '/our-works' ? 'nav-item active' : 'nav-item'}>
                      <Link  onClick={handleLinkClick} to="/our-works" className="nav-link">Our works</Link>
                    </li>
                    <li className={pathname === '/research-team' ? 'nav-item active' : 'nav-item'}>
                      <Link  onClick={handleLinkClick} to="/research-team" className="nav-link">Research Team</Link>
                    </li>
                    <li className={pathname === '/blogs' ? 'nav-item active' : 'nav-item'}>
                      <Link  onClick={handleLinkClick} to="/blogs" className="nav-link">Blogs</Link>
                    </li>
                    <li className={pathname === '/contact' ? 'nav-item active' : 'nav-item'}>
                      <Link  onClick={handleLinkClick} to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav> 


    

      <Outlet />
      <nav className="footer p-4 mt-4">
    <h2 className="title text-center">Collaboration</h2>
    <ul>
      <li>
       <img src={Collab1} alt="" />
      </li>
      <li>
       <img src={Collab2} alt="" />
      </li>
      <li>
       <img src={Collab3} alt="" />
      </li>
    </ul>
  </nav>
    </>
  );
};

export default Layout;
