import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "Styles/GlobalStyle";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "Modules/index";

import App from "Pages/index";

const store = createStore(rootReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
