import NavBar from "../NavBar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

const PaintDetails = () => {
  const path = window.location.href;
  let id = path.substr(-2);
  if (id.charAt(0) === "/") {
    id = id.substring(1);
  }
  const [paint, setPaint] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/images/${id}`).then((response) => {
      setPaint(response.data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="split_page">
        <div className="left_page">
          <img
            src={paint.path}
            alt={paint.description}
            className="paint_picture"
          />
        </div>
        <div className="right_page">
          <h1>{paint.title}</h1>
          <br />
          <br />
          <p className="total_center">{paint.description}</p>
        </div>
      </div>
    </>
  );
};

export default PaintDetails;
