import React from "react";
import { Link } from "react-router-dom";
import "./back-button.css";

export const BackButtonComponent = () => {
  return (
    <div className="back-button">
      <Link to={`/`} className="label">
        Back
      </Link>
    </div>
  );
};
