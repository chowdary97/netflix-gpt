import React from "react";
import Header from "./Header";
import { useNowPlayingMovies, usePopularMovies } from "../hooks";
import { MainContainer, SecondaryContainer, SearchGpt } from "../components";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptEnabled = useSelector((store) => store.gpt.gptEnabled);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {gptEnabled ? (
        <SearchGpt />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
