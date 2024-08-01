import React from "react";
import { Body } from "./components";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
// import Tailwind from "./test-lab/tailwind";
// import Nike from "./test-lab/nike";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;
