import React from "react";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ArticlesList} />
        <Route exact path="/posts/:id" component={Article} />
      </Switch>
    </div>
  );
}

export default App;
