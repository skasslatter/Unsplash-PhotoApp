import React from "react";
import "./App.css";
import { HomeComponent } from "./components/home";
require("dotenv").config();

export const App = () => {
  return (
    <div className="App">
      <HomeComponent />
    </div>
  );
};
