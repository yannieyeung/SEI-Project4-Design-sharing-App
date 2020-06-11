import React from "react";
import { Route, Switch } from "react-router-dom";
import Posts from "../component/Posts/Posts";
import EachPost from "../component/EachPost/EachPost";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/posts/:slug" component={EachPost} />
    </Switch>
  );
}

export default App;
