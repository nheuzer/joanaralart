import React from "react";
import Title from "../Title/Title.jsx";
import ImageGrid from "../ImageGrid/ImageGrid.jsx";
import NavBar from "../NavBar/NavBar.jsx";
const Home = ({ images }) => {
  return (
    <>
      <NavBar />
      <Title />
      <ImageGrid images={images} />
    </>
  );
};

export default Home;
