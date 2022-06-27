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
  const openOnePicture = (item) => {
    console.log(item);
    history.push(item.targetUrl);
  };
  return (
    <div className="galleryHome">
      {images &&
        images.map((item, index) => {
          let path_carousel = "/carousel/" + item.id;
          let path_paint = "/paint/" + item.id;
          return (
            <div className="picsHome" key={index}>
              <img
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
