import CarouselTool from "components/CarouselTool/CarouselTool";
import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

const Image = ({ images, image }) => {
  return (
    <Popup
      className="popup"
      trigger={
        <div className="img-wrap">
          <img src={image.path} alt={image.description} />
        </div>
      }
      position="center center"
      key={image.id}
    >
      <CarouselTool images={images} id={image.id} key={image.id} />
    </Popup>
  );
};

export default Image;
