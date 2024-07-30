import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase/config";
import { removeUser } from "../utils/redux/slices/userSlice";
import { toggleGpt } from "../utils/redux/slices/gptSlice";
import { changeLanguage } from "../utils/redux/slices/configSlice";
import { useNavigate } from "react-router-dom";
import { LOGO_IMAGE, SUPPORTED_LANGUAGES } from "../utils/constants";

const Header = () => {
  const user = useSelector((state) => state.user);
  const gptEnabled = useSelector((state) => state.gpt.gptEnabled);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSignOutNavigate = () => {
    dispatch(removeUser());
    navigate("/");
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        handleOnSignOutNavigate();
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const toggleGptSearchComponent = () => {
    dispatch(toggleGpt());
  };

  const handleChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between al">
      <img className="w-44 " src={LOGO_IMAGE} alt="logo" />
      <div>
        <select
          onChange={handleChange}
          className="px-4 py-2 m-2 bg-gray-600 text-white rounded-lg "
        >
          {SUPPORTED_LANGUAGES.map((language) => (
            <option key={language.value} value={language.value}>
              {language.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            toggleGptSearchComponent();
          }}
          className="py-2 rounded-lg px-6 bg-purple-700 text-white"
        >
          {gptEnabled ? "Home" : "Netflix Gpt"}
        </button>
      </div>
      {user && (
        <div className="flex text-center">
          <h3 className="text-white font-bold text-lg">{user.displayName}</h3>
          <button
            className="text-white font-bold text-lg"
            onClick={handleSignOut}
          >
            Sign OUt
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
