import React from "react";
import "../SASS/components/services.scss";

const Services = () => {
  return (
    <section className="services" id="services">
      <h1>Services</h1>
      <div className="rowServices">
        {/* first service */}
        <div className="col">
          <i
            class="fa-solid fa-building"
            style={{ color: "white", fontSize: "3rem", marginBottom: "3rem" }}
          ></i>
          <h4 className="headingServices">Buildings</h4>
          <p>
            The term “services” appears in the construction industry as it
            pertains to tasks like “consultancy”
          </p>
        </div>
        {/* second service */}
        <div className="col">
          <i
            class="fa-solid fa-dragon"
            style={{ color: "white", fontSize: "3rem", marginBottom: "3rem" }}
          ></i>

          <h4 className="headingServices">Civil Engineering</h4>
          <p>Professional services” includes architecture and engineering</p>
        </div>
        {/* third service */}
        <div className="col">
          <i
            class="fa-solid fa-building"
            style={{ color: "white", fontSize: "3rem", marginBottom: "3rem" }}
          ></i>
          <h4 className="headingServices">Installation and assembly work</h4>
          <p>
            assembling and erecting structures, structural members,
            technological equipment and units
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
