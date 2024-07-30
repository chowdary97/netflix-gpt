import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks";
import { MainContainer, SecondaryContainer } from "../components";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
