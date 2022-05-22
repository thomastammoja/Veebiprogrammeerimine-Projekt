import React from "react";
import { Carousel } from "react-responsive-carousel";

//Carousel images
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

//Styles
import "./Banner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="banner">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        showArrows={false}
        interval={5000}
      >
        <div className="banner__image">
          <img src={img1} alt="" />
        </div>

        <div className="banner__image">
          <img src={img2} alt="" />
        </div>

        <div className="banner__image">
          <img src={img3} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
