// console.log("Remember to run -> npm run dev <- in terminal")

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Bootstrap from "./vendor/bootstrap-without-jquery";

import Layout from "./pages/Layout";
import Todos from "./pages/Todos";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";



const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Layout}> 
    <IndexRoute component={Todos}></IndexRoute>
    <Route path="archives/:article" component={Archives}></Route>
    <Route path="settings" component={Settings}></Route>
  </Route>
  </Router>,
app);