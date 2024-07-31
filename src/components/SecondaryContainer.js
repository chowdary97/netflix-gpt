import React from "react";
import { MovieList } from "../components";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  let nowPlaying = [...movies.nowPlayingMovies];
  if (!movies) return;
  return (
    <div className="bg-black">
      <div className="-mt-52  relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Trending" movies={nowPlaying.reverse()} />
        <MovieList title="Popular" movies={movies.nowPlayingMovies} />
        <MovieList title="Upcoming Movies" movies={nowPlaying} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
