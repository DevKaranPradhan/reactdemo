import { loginSaga } from "../userSaga";
import {
  loginRequest,
  setUserDetails,
  loginFailed,
} from "../../actions/loginActions";
import { call } from "redux-saga/effects";
import login from "../../apis/loginApi";

describe("Login Saga", () => {
  let gen, action;

  const response = {
    data: {
      id: 1,
      username: 1,
      auth_token: "test",
    },
  };
  beforeEach(() => {
    action = loginRequest({
      email: "dvpradhan@gmail.com",
      password: "password",
    });
    gen = loginSaga(action);
  });

  it("must call api", () => {
    expect(gen.next().value).toEqual(call(login, action.value));
  });

  it("must dispatch success action", () => {
    gen.next();
    // expect(gen.next().value).toEqual(call(login, action.value))
    expect(gen.next(response).value).toEqual(
      put(setUserDetails(response.data))
    );
    expect(gen.next().done).toEqual(true);
  });

  it("must dispatch failure action", () => {
    const error = "Login Failed!!";
    gen.next();
    expect(gen.throw(error).value).toEqual(put(loginFailed(error)));
  });
});
