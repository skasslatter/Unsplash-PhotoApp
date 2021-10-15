import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

export const LoadingSpinnerComponent = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets10.lottiefiles.com/datafiles/bEYvzB8QfV3EM9a/data.json"
      style={{ height: "300px", width: "300px" }}
    ></Player>
  );
};
