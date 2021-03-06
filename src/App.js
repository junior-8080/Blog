import React from 'react';
import {Route,Switch} from "react-router-dom"

import Home from "./Home"
import Category from "./Category"
import Apost from "./APost"
import ErrorPage from "./Error"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/category/:id" component = {Category} />
        <Route path="/post/:id" component = {Apost} />
        <Route  component = {ErrorPage} />
      </Switch>
       
    </div>
  );
}

export default App;
