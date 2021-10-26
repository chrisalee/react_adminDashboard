import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from './redux/reducers/index.js';
import Layout from "./components/layout/Layout";
import "./assets/css/index.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";

// document.title = 'CAL Dashboard';
const store = createStore(
  rootReducer
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
