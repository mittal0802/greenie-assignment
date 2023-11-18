import React, { useState } from "react";
import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
        <div className={isOpen ? "line1 toggle" : "line1"}></div>
        <div className={isOpen ? "line2 toggle" : "line2"}></div>
        <div className={isOpen ? "line3 toggle" : "line3"}></div>
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
