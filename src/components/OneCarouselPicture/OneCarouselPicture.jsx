import React from "react";
import { useHistory } from "react-router-dom";

const OneCarouselPicture = ({ image }) => {
  const history = useHistory();
  return (
    <div>
      <img src={image.path} />
      <p
        className="legend legend2"
        onClick={() => history.push(image.targetUrl)}
      >
        {image.title}
      </p>
    </div>
  );
};

export default OneCarouselPicture;
