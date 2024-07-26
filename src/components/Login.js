import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleToggleForm = () => {
    setIsSignInForm(!isSignInForm);
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
        <form className="w-3/12 m-auto absolute top-0 left-0 right-0   p-4  bg-black mt-36 bg-opacity-70 rounded-lg">
          <h1 className="font-bold text-white text-2xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter Name Here"
              className="block w-full p-2 my-4 bg-gray-700 rounded-lg"
            />
          )}
          <input
            type="email"
            placeholder="Enter Email Here"
            className="block w-full p-2 my-4 bg-gray-700 rounded-lg focus:bg-gray-700 border-none"
          />
          <input
            type="password"
            placeholder="Enter Password Here"
            className="block w-full p-2 my-4 bg-gray-700 rounded-lg"
          />
          <button className="py-2 my-4 bg-red-700 text-white w-full rounded-lg">
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
