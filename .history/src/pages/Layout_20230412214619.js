import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from '../assets/loog.png';
import Collab1 from "../assets/collab1.png";
import Collab2 from "../assets/collab2.png";
import Collab3 from "../assets/collab3.png";
import '../css/main.css';

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="logo">
        <img alt="Vue logo" src={Logo} />
      </div>
      <nav>
        <ul>
          <li className={pathname === '/' ? 'active' : ''}>
            <Link to="/" >Home</Link>
          </li>
          <li  className={pathname === '/about-us' ? 'active' : ''}>
            <Link to="/about-us" >About us</Link>
          </li>
          <li className={pathname === '/our-works' ? 'active' : ''}>
            <Link to="/our-works" >Our WOrks</Link>
          </li>
          <li className={pathname === '/research-team' ? 'active' : ''}>
            <Link to="/research-team" >Research Team</Link>
          </li>
          <li className={pathname === '/blogs' ? 'active' : ''}>
            <Link to="/blogs" >Blog</Link>
          </li>
          <li className={pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact" >Contact us</Link>
          </li>
        </ul>
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
