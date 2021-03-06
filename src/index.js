import React from "react";
import ReactDOM from "react-dom";
import Routing from "./routing";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import "antd/dist/antd.css";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
