import React from "react";
import "../SASS/components/home.scss";
const Home = () => {
  return (
    <section className="home" id="home">
      <h1>Ali construction</h1>
      <h3>Your new house is more than just a building</h3>
      <h4>
        It is your home, where you get away from all the pressure and stress,
        making lifelong memories with your family
      </h4>
      <a href="#services">
        <button className="btn">OUR SERVICES</button>
      </a>

      {/* <img src={require('../img/image1.jpg')} id='commonPhoto'/> */}
    </section>
  );
};

export default Home;
