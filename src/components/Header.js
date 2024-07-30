import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase/config";
import { removeUser, addUser } from "../utils/redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_IMAGE } from '../utils/constants'

const Header = () => {
  const user = useSelector((state) => state.user);
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
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between al">
      <img
        className="w-44 "
        src={LOGO_IMAGE}
        alt="logo"
      />
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
