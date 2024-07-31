import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import languageConstatnts from "../utils/languageConstatnts";
import { API_OPTIONS } from "../utils/config";
import MovieList from "./MovieList";
import { addGptSuggestedMovies } from "../utils/redux/slices/gptSlice";
import { BASE_URL } from "../utils/constants";
import openai from '../utils/openai';

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const searchText = useRef(null);
  const selectedLanguage = useSelector(
    (store) => store.config.selectedLanguage
  );
  const gptSuggestedMovies = useSelector(
    (store) => store.gpt.gptSuggestedMovies
  );

  const handleGptSearhClick = async () => {
    const query = `Act as a movie recommendation system and suggest some movies for the query ${searchText.current.value}. only give me names of five movies comma sepereated like the example give ahed like "Bahubali,King,Kingkong" `;
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    if (!chatCompletion.choices) return;

    const gptMovies = chatCompletion.choices[0].message.content.split(",");
    const tmdbPromises = gptMovies.map((movie) =>
      getMovieListInformation(movie)
    );
    const tmdbResults = await Promise.all(tmdbPromises);
    dispatch(addGptSuggestedMovies(tmdbResults));
  };

  const getMovieListInformation = async (movieName) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.results[0];
    } catch (err) {
      console.error("Error fetching movie information:", err);
      return null; // Return null or some default value in case of error
    }
  };

  return (
    <div className="pt-[20%]">
      <form
        className="bg-black w-1/2 mx-auto gap-4 flex p-2 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="px-4 py-2 w-[70%] rounded-lg"
          placeholder={
            languageConstatnts[selectedLanguage].searchForMovieRecommendations
          }
        />
        <button
          onClick={() => handleGptSearhClick()}
          className="bg-red-700 px-5 rounded-lg text-white"
        >
          {languageConstatnts[selectedLanguage].search}
        </button>
      </form>
      <MovieList title="GPT suggest movies" movies={gptSuggestedMovies} />
    </div>
  );
};

export default GptSearchBar;
