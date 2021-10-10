import React from "react";
import PhotoListComponent from "./photo-list/photo-list";

export const HomeComponent = () => {
  return (
    <>
      <h1>Hello, you are seeing a random choice of photos</h1>
      <PhotoListComponent />
    </>
  );
};
