import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { validate } from "../utils/validate/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase/config";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/redux/slices/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleToggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const navigateToBrowse = (user) => {
    dispatch(addUser(user));
    navigate("/browse");
  };

  const updateUserProfile = (user) => {
    updateProfile(auth.currentUser, {
      displayName: name.current.value,
      photoURL:
        "https://lh3.googleusercontent.com/-meNMOZtK1RQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfknRa6Uvj8L_z9jwqcazCpAJlBSGwQ/photo.jpg?sz=46",
    })
      .then((info) => {
        const { uid, email, displayName, photoURL } = user;
        // navigateToBrowse({
        //   email,
        //   uid,
        //   displayName,
        //   photoURL,
        // });
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const handleSignIn = () => {
    setErrorMessage("");
    const message = validate({
      email: email.current.value,
      password: password.current.value,
    });
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((user) => {
          dispatch(addUser());
          // updateUserProfile(user.user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((user) => {
          const { uid, email, displayName, photoURL } = user.user;
          navigateToBrowse({
            email,
            uid,
            displayName,
            photoURL,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_small.jpg"
          alt="Background"
          className="w-full h-auto"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 m-auto absolute top-0 left-0 right-0   p-4  bg-black mt-36 bg-opacity-70 rounded-lg"
        >
          <h1 className="font-bold text-white text-2xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Enter Name Here"
              className="block w-full p-2 my-4 bg-gray-700 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Enter Email Here"
            className="block w-full p-2 my-4 bg-gray-700 rounded-lg focus:bg-gray-700 border-none text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Enter Password Here"
            className="block w-full p-2 my-4 bg-gray-700 rounded-lg text-white"
          />
          {errorMessage && (
            <p className="text-red-900 font-bold text-center">{errorMessage}</p>
          )}
          <button
            onClick={handleSignIn}
            className="py-2 my-4 bg-red-700 text-white w-full rounded-lg"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={() => handleToggleForm()}
            className="text-white text-center cursor-pointer"
          >
            {!isSignInForm
              ? "Already Registered? Sign In Now"
              : "New to Netflix? Sign Up Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
