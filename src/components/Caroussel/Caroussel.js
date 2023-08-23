import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

const Carrousel = ({ musee }) => {
  return musee.length === 0 ? (
    <Loading />
  ) : (
    <Carousel
      autoPlay={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      <div>
        <img
        src={musee.image1}
        width= "80%;"
        border-radius= "5px;"
        height="450px"
        object-fit= "cover;"
      />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img
          src={musee.image2}
          width="80%;"
          height="450px"
          border-radius="25px;"
          object-fit="cover;"
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img
          src={musee.image3}
          width="80%;"
          border-radius="5px;"
          height="450px"
          object-fit="cover;"
        />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default Carrousel;
