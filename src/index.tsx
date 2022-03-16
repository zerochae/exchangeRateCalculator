import React from "react";
import ReactDOM from "react-dom";
import App from "Pages/index";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "Modules/index";

const store = createStore(rootReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
