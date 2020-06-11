import React from "react";
import { Route, Switch } from "react-router-dom";
import Posts from "../component/Posts/Posts";
import EachPost from "../component/EachPost/EachPost";
import Instruction from "../component/EachPost/Instruction";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/posts/:slug" component={EachPost} />
      <Route exact path="/posts/:slug/instruction" component={Instruction} />
    </Switch>
  );
}

export default App;
