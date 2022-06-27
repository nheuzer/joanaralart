import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import PaintDetails from "./components/PaintDetails/PaintDetails";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import CarouselComponent from "components/CarouselComponent/CarouselComponent";

export default function App() {
  const images = [
    {
      id: 0,
      path: "/pictures/picture_1.jpg",
      title: "picture 1",
      description:
        "Accedat huc suavitas quaedam oportet sermonum atque morum, haudquaquam mediocre condimentum amicitiae. Tristitia autem et in omni re severitas habet illa quidem gravitatem, sed amicitia remissior esse debet et liberior et dulcior et ad omnem comitatem facilitatemque proclivior.",
      targetUrl: "/paint/0",
    },
    {
      id: 1,
      path: "/pictures/picture_2.jpg",
      title: "picture 2",
      description:
        "Vide, quantum, inquam, fallare, Torquate. oratio me istius philosophi non offendit; nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; et tamen ego a philosopho, si afferat eloquentiam, non asperner, si non habeat, non admodum flagitem. re mihi non aeque satisfacit, et quidem locis pluribus. sed quot homines, tot sententiae; falli igitur possumus.",
      targetUrl: "/paint/1",
    },
    {
      id: 2,
      path: "/pictures/picture_3.jpg",
      title: "picture 3",
      description:
        "Quod cum ita sit, paucae domus studiorum seriis cultibus antea celebratae nunc ludibriis ignaviae torpentis exundant, vocali sonu, perflabili tinnitu fidium resultantes. denique pro philosopho cantor et in locum oratoris doctor artium ludicrarum accitur et bybliothecis sepulcrorum ritu in perpetuum clausis organa fabricantur hydraulica, et lyrae ad speciem carpentorum ingentes tibiaeque et histrionici gestus instrumenta non levia.",
      targetUrl: "/paint/2",
    },
    {
      id: 3,
      path: "/pictures/picture_4.jpeg",
      title: "picture 4",
      description:
        "Iis igitur est difficilius satis facere, qui se Latina scripta dicunt contemnere. in quibus hoc primum est in quo admirer, cur in gravissimis rebus non delectet eos sermo patrius, cum idem fabellas Latinas ad verbum e Graecis expressas non inviti legant. quis enim tam inimicus paene nomini Romano est, qui Ennii Medeam aut Antiopam Pacuvii spernat aut reiciat, quod se isdem Euripidis fabulis delectari dicat, Latinas litteras oderit?",
      targetUrl: "/paint/3",
    },
    {
      id: 4,
      path: "/pictures/picture_5.jpg",
      title: "picture 5",
      targetUrl: "/paint/4",
    },
  ];

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/paint/:id">
            <PaintDetails images={images} />
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
