import Recat, { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <section className="navbar">
      <img src={require("../img/logo3.png")} alt="" />

      <div className="menu">
        <div className="mainMenu"></div>
        {openNav && (
          <div
            onClick={() => {
              setOpenNav(!openNav);
            }}
            className={`navList ${openNav ? "clickedMenu" : ""}`}
          >
            <li className="navigation">
              <a href="#home" className="navigationLink">
                HOME
              </a>
            </li>
            <li className="navigation">
              <a href="#gallery" className="navigationLink">
                GALLERY
              </a>
            </li>
            <li className="navigation">
              <a href="#services" className="navigationLink">
                SERVICES
              </a>
            </li>
            <li className="navigation">
              <a href="#projects" className="navigationLink">
                PROJECTS
              </a>
            </li>
            <li className="navigation">
              <a href="#contact" className="navigationLink">
                CONTACT
              </a>
            </li>
          </div>
        )}
      </div>
      <i
        onClick={() => {
          setOpenNav(!openNav);
        }}
        className="fa-solid fa-bars "
      ></i>
    </section>
  );
};

export default Navbar;
