import React from "react";
import { useSelector } from "react-redux";
import languageConstatnts from "../utils/languageConstatnts";

const GptSearchBar = () => {
  const selectedLanguage = useSelector(
    (store) => store.config.selectedLanguage
  );
  return (
    <div className="pt-[20%]">
      <div className="bg-black w-1/2 mx-auto gap-4 flex p-2">
        <input
          className="px-4 py-2 w-[70%] rounded-lg"
          placeholder={languageConstatnts[selectedLanguage].searchForMovieRecommendations}
        />
        <button className="bg-red-700 px-5 rounded-lg text-white">
          {languageConstatnts[selectedLanguage].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
