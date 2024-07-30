import React from "react";
import Header from "./Header";
import { useNowPlayingMovies, usePopularMovies } from "../hooks";
import { MainContainer, SecondaryContainer } from "../components";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
