import React from "react";
import "./App.css";
import Articles from "./components/Articles";
import Article from "./components/Article";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/posts/:id" component={Article} />
      </Switch>
    </div>
  );
}

export default App;
