import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/reducers/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./_base.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
