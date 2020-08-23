import { LOAD_LOGIN } from "./actionTypes";

export const loadLogin = (isLogin) => {
  return {
    type: LOAD_LOGIN,
    payload: isLogin,
  };
};
