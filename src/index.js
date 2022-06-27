import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import PaintDetails from "./components/PaintDetails/PaintDetails";
import Contact from "./components/Contact/Contact";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import CarouselComponent from "components/CarouselComponent/CarouselComponent";
//import App from "./components/App/App";

export default function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/images").then((response) => {
      console.log("promise fulfilled");
      setImages(response.data);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/paint/:id">
            <PaintDetails />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/carousel/:id">
            <CarouselComponent images={images} />
          </Route>
          <Route path="/">
            <Home images={images} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
