import React from "react";
import "./App.css";
import { HomeComponent } from "./components/home";

export const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <HomeComponent />
      </div>
    </div>
  );
};
