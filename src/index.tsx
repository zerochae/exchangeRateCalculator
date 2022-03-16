import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "Styles/GlobalStyle";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "Modules/index";

import App from "Pages/index";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
