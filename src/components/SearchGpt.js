import React from "react";
import { GptSearchBar, GptMoviesSuggestions } from "../components";

const SearchGpt = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_small.jpg"
          alt="Background"
          className="w-full h-auto"
        />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default SearchGpt;
