import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import OneCarouselPicture from "components/OneCarouselPicture/OneCarouselPicture";

const CarouselTool = ({ images, id }) => {
  let images_to_pop = images;
  let real_images = [];
  real_images = images_to_pop.filter((img) => img.id >= id);
  let count = real_images.length;
  for (let i = 0; i < id; i++) {
    real_images[count] = images_to_pop.filter((img) => img.id == i);
    count++;
  }
  return (
    <Carousel>
      {real_images &&
        real_images.map((image) => (
          <OneCarouselPicture image={image} key={image.id} />
        ))}
    </Carousel>
  );
};

export default CarouselTool;
