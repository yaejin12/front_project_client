import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {  createStoreHook, Provider } from "react-redux";
import rootReducer from "./modules";
import { devToolsEnhancer } from "@redux-devtools/extension";

// 리덕스 코드추가
const store = createStoreHook(rootReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

reportWebVitals();
