import { LOGIN } from "./actionTypes";

export const loadLogin = (isLogin) => {
  return {
    type: LOGIN,
    payload: isLogin,
  };
};
