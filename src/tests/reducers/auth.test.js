import authReducer from "../../reducers/auth";

test("should login", () => {
  const uid = "123abc";
  const action = {
    type: "LOGIN",
    uid
  };
  const state = authReducer(undefined, action);
  expect(state).toEqual({
    uid
  });
});

test("should logout", () => {
  const uid = "123abc";
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid }, action);
  expect(state).toEqual({});
});
