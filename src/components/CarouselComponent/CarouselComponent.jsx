import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = ({ images }) => {
  const path = window.location.href;
  let id = path.substr(-2);
  if (id.charAt(0) === "/") {
    id = id.substring(1);
  }

  return (
    <div className="carousel-wrapper">
      <Carousel>
        {images &&
          images.map((image) => {
            return (
              <div className="carousel_image" key={image.id}>
                <img src={image.path} alt={image.title} />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
