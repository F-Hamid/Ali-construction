import React, { useState } from "react";
import "../SASS/components/projects.scss";
import { motion } from "framer-motion";

const Projects = () => {
  const [isOpen, setIsOpen] = useState({
    P1: false,
    P2: false,
    P3: false,
    P4: false,
  });

  return (
    <motion.section className="projects" id="projects">
      {/* card 1 */}
      <h1>Projects</h1>
      <div className="projectsWrap">
        <motion.div
          transition={{ layout: { duration: 1 } }}
          layout
          className="card"
          onClick={() => setIsOpen({ ...isOpen, P1: !isOpen.P1 })}
        >
          <motion.div layout="position" className="imageContainer">
            <img src={require("../img/residence1.jpg")} alt="" />
          </motion.div>
          <p className="client">Client ESS</p>
          {isOpen.P1 && (
            <motion.div className="projectDetails">
              <motion.div className="projectName">
                <h4 className="headingName">Project Name:</h4>
                <p className="paragraphName">PALMA RESIDENCY</p>
              </motion.div>
              <motion.div className="cost">
                <h4 className="haedingCost">The Cost:</h4>
                <p className="paragraphCost">$ 150000</p>
              </motion.div>
              <motion.div className="description">
                <h4 className="headingDescrip">Description:</h4>
                <p className="paragraphDescrip">
                  It is a project lacated in ...
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
        {/* card 2 */}
        <motion.div
          transition={{ layout: { duration: 1 } }}
          layout
          onClick={() => setIsOpen({ ...isOpen, P2: !isOpen.P2 })}
          className="card"
        >
          <motion.div layout="position" className="imageContainer">
            <img src={require("../img/residence2.jpg")} alt="" />
          </motion.div>
          <p className="client">Client Margin</p>
          {isOpen.P2 && (
            <motion.div className="projectDetails">
              <motion.div className="projectName">
                <h4 className="headingName">Project Name:</h4>
                <p className="paragraphName">ANNAKHIL RESIDENCY</p>
              </motion.div>
              <motion.div className="cost">
                <h4 className="haedingCost">The Cost:</h4>
                <p className="paragraphCost">$ 500000</p>
              </motion.div>
              <motion.div className="description">
                <h4 className="headingDescrip">Description:</h4>
                <p className="paragraphDescrip">
                  It is a project lacated in ...
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
        {/* card 3 */}
        <motion.div
          transition={{ layout: { duration: 1 } }}
          layout
          onClick={() => setIsOpen({ ...isOpen, P3: !isOpen.P3 })}
          className="card"
        >
          <div className="imageContainer">
            <img src={require("../img/residence3.jpg")} alt="" />
          </div>
          <p className="client">Client SCR</p>
          {isOpen.P3 && (
            <motion.div className="projectDetails">
              <motion.div className="projectName">
                <h4 className="headingName">Project Name:</h4>
                <p className="paragraphName">ARIJ RESIDENCY</p>
              </motion.div>
              <motion.div className="cost">
                <h4 className="haedingCost">The Cost:</h4>
                <p className="paragraphCost">$ 5000</p>
              </motion.div>
              <motion.div className="description">
                <h4 className="headingDescrip">Description:</h4>
                <p className="paragraphDescrip">
                  It is a project lacated in ...
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
        {/* card 4 */}
        <motion.div
          transition={{ layout: { duration: 1 } }}
          layout
          onClick={() => setIsOpen({ ...isOpen, P4: !isOpen.P4 })}
          className="card"
        >
          <div className="imageContainer">
            <img src={require("../img/residence4.jpg")} alt="" />
          </div>
          <p className="client">Client AliDev</p>

          {isOpen.P4 && (
            <motion.div className="projectDetails">
              <motion.div className="projectName">
                <h4 className="headingName">Project Name:</h4>
                <p className="paragraphName">ALRIYADH RESIDENCY</p>
              </motion.div>
              <motion.div className="cost">
                <h4 className="haedingCost">The Cost:</h4>
                <p className="paragraphCost">$ 5000</p>
              </motion.div>
              <motion.div className="description">
                <h4 className="headingDescrip">Description:</h4>
                <p className="paragraphDescrip">
                  It is a project lacated in ...
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
