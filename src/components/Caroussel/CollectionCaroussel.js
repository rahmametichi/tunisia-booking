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
          src={musee.collectionImage1}
          width="500px;"
          border-radius="5px;"
          height="150px"
          object-fit="cover;"
        />
        <p>{musee.collectionDescription1}</p>
      </div>
      <div>
        <img
          src={musee.collectionImage2}
          width="500px;"
          height="150px"
          border-radius="25px;"
          object-fit="cover;"
        />
        <p >{musee.collectionDescription2}</p>
      </div>
      <div>
        <img
          src={musee.collectionImage3}
          width="500px;"
          border-radius="5px;"
          height="150px"
          object-fit="cover;"
        />
        <p>{musee.collectionDescription3}</p>
      </div>
    </Carousel>
  );
};

export default Carrousel;
