import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import LoginContainer from "../LoginContainer";
import loginReducer from "../../reducers/loginReducer";
import projectsReducer from "../../reducers/projectReducer";

describe("LoginContainer", () => {
  it("must return login component", () => {
    const { asFragement } = render(
      <Provider
        store={createStore(
          combineReducers({
            loginReducer,
            projectsReducer,
          })
        )}
      >
        <LoginContainer />
      </Provider>
    );

    expect(asFragement()).toMatchSnapshot();
  });
});
