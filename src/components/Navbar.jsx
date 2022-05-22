import Recat, { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <section className="navbar">
      <img src={require("../img/logo3.png")} alt="" />

      <div className="menu">
        <div
          className="mainMenu"
          onClick={() => {
            setOpenNav(!openNav);
          }}
        >
          <i class="fa-solid fa-bars"></i>
        </div>
        {openNav && (
          <div className="navList">
            <li class="navigation">
              <a href="#home" class="navigationLink">
                HOME
              </a>
            </li>
            <li class="navigation">
              <a href="#gallery" class="navigationLink">
                GALLERY
              </a>
            </li>
            <li class="navigation">
              <a href="#services" class="navigationLink">
                SERVICES
              </a>
            </li>
            <li class="navigation">
              <a href="#projects" class="navigationLink">
                PROJECTS
              </a>
            </li>
            <li class="navigation">
              <a href="#contact" class="navigationLink">
                CONTACT
              </a>
            </li>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
