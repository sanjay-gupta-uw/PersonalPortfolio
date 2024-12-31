import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { navItems } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // Function to handle scrolling to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>
          Sanjay Gupta
        </h1>
        {/* <img src={images.logo} alt="logo" /> */}
      </div>
      <ul className="app__navbar-links">
        {navItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a
              href={`#${item}`}  // Link with id to trigger scroll
              onClick={() => scrollToSection(item)}  // Call scroll function
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}  // Link with id to trigger scroll
                    onClick={() => {
                      setToggle(false);
                      scrollToSection(item); // Call scroll function on mobile
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
