import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/config";
import { addPopularMovies } from "../utils/redux/slices/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMovies();
  }, []);
  const getPopularMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?page=1`, API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addPopularMovies(response.results));
      })
      .catch((err) => console.error(err));
  };
};

export default usePopularMovies;
