import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import Routes from "./routes/Routes";
import loginReducer from "./reducers/loginReducer";
import projectsReducer from "./reducers/projectReducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  combineReducers({
    loginReducer,
    projectsReducer,
  }),
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
