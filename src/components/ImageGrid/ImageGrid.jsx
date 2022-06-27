import React from "react";
import { useHistory } from "react-router-dom";

/*const ImageGrid = ({ images }) => {
  return (
    <div className="img-grid">
      {images &&
        images.map((image) => (
          <Image images={images} image={image} key={image.id} />
        ))}
    </div>
  );
};*/

const ImageGrid = ({ images }) => {
  const history = useHistory();
  return (
    <div className="galleryHome">
      {images &&
        images.map((item, index) => {
          let path_paint = "/paint/" + item.id;
          return (
            <div className="picsHome" key={index}>
              <img
                alt={item.title}
                src={item.path}
                style={{ width: "100%" }}
                onClick={() => history.push(path_paint)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
