import React from "react";
import "../SASS/components/gallery.scss";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h1>Gallery</h1>
      <div className="imagesPart">
        <div className="part1">
          <video
            src={require("../img/construction.mp4")}
            id="video"
            typeof="video/mp4"
            controls
            muted
            loop
          ></video>
        </div>
        <div className="part2">
          <img src={require("../img/image1.jpg")} id="commonPhoto" />
          <img
            src={require("../img/image2.jpg")}
            id="image1"
            className="imagesHover"
          />
          {/* <img src={require('../img/image3.jpg')} /> */}
          <img
            src={require("../img/image4.jpg")}
            id="image2"
            className="imagesHover"
          />
          <img
            src={require("../img/image5.jpg")}
            id="image3"
            className="imagesHover"
          />
          <img
            src={require("../img/image6.jpg")}
            id="image4"
            className="imagesHover"
          />
          <img
            src={require("../img/image7.jpg")}
            id="image5"
            className="imagesHover"
          />
          <img
            src={require("../img/image8.jpg")}
            id="image6"
            className="imagesHover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
