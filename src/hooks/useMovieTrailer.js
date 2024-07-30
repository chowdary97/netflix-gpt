import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/redux/slices/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVieos();
  }, []);
  const getMovieVieos = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        let trailer = response.results.filter(
          (video) => video.type === "Trailer"
        );
        dispatch(addTrailerVideo(trailer[0]));
      })
      .catch((err) => console.error(err));
  };
};

export default useMovieTrailer;
