import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { HomeComponent } from "./components/home";
import PhotoDetailComponent from "./components/photo-detail/photo-detail";
require("dotenv").config();

export const App = () => {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/photos/:id">
            <PhotoDetailComponent />
          </Route>
        </Switch>
      </div>
    </>
  );
};
