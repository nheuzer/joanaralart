import React from "react";
import Title from "../Title/Title";
import ImageGrid from "../ImageGrid/ImageGrid";
import NavBar from "components/NavBar/NavBar";
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
