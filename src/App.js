import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Programacao from "./components/Programacao";
import Frontend from "./components/Frontend";
import Design from "./components/Design";
import Rodape from "./components/Rodape";
import "./index.css";

class App extends React.Component {
  render () {
    return (
      <Router>
        <>
          <Topo />
          <Routes>
            <Route exact path="/" render={Home} />
            <Route exact path="/frontend" render={() => <Frontend/>} />
            <Route exact path="/programacao" render={() => <Programacao/>} />
            <Route exact path="/design" render={() => <Design/>} />
            <Route exact path="/catalogo" render={(props) => <Catalogo/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Rodape />
        </>
      </Router>
    );
  }
}
export default App;
