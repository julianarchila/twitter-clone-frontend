import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
