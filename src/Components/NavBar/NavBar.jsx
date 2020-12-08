import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function Navigation(props) {
  const [menuStatus, setMenuStatus] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (e) => {
    if (menuStatus === false && showMenu === false) {
      setMenuStatus(true);
      setShowMenu(true);
    } else {
      setMenuStatus(false);
      setShowMenu(false);
    }
  };

  return (
    <header>
      <div className="header">
          {/* <div className="wrapper"> */}
        <Link to="/" class="">
          <h1 className="logo">SHARIFA.COM</h1>
        </Link>
        <ul className="nav">
        <Link to="/" id="whoWeAre" className="nav">
            <li className="nav-items" id="nav-zero" onClick={handleMenuToggle}>
              Who We Are
            </li>
          </Link>
          <Link to="/whatWeDo" id="whatWeDo" className="nav">
            <li className="nav-items" id="nav-one" onClick={handleMenuToggle}>
            What We Do
            </li>
          </Link>

          <Link to="/ourImpact" id="ourImpact" className="nav">
            <li className="nav-items" id="nav-two" onClick={handleMenuToggle}>
              Our Impact
            </li>
          </Link>
          <Link to="/virtualOffice" id="virtualOffice" className="nav">
            <li className="nav-items" id="nav-three" onClick={handleMenuToggle}>
              Virtual Office
            </li>
          </Link>
          <Link to="/vlogBlog" id="vlogBlog" className="nav">
            <li className="nav-items" id="nav-four" onClick={handleMenuToggle}>
              Vlog/Blog
            </li>
          </Link>

        </ul>

        <div
          className={`hamburger-btn ${menuStatus ? "open" : ""}`}
          onClick={handleMenuToggle}>
          <div className="hamburger-patty"></div>
        </div>
      </div>

      <div className={`dropdown-menu ${showMenu ? "show" : ""}`}>
        <Link to="/" id="whoWeAre" className="header-item">
          <h1 className="nav-link" id="nav-one" onClick={handleMenuToggle}>
            Who We Are
          </h1>
        </Link>
        <Link to="/whatWeDo" id="whatWeDo" className="header-item">
          <h1 className="nav-link" id="nav-one" onClick={handleMenuToggle}>
            What We Do
          </h1>
        </Link>

        <Link to="/ourImpact" id="ourImpact" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Our Impact
          </h1>
        </Link>
        <Link to="/virtualOffice" id="virtualOffice" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Virtual Office
          </h1>
        </Link>
        <Link to="/vlogBlog" id="vlogBlog" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Vlog Blog
          </h1>
        </Link>

      </div>
    </header>
  );
}

export default Navigation;