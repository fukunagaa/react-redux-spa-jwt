import { userInitialState } from "../initialState";
import { LOGIN } from "../actionTypes";

export default function (state = userInitialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    default:
      return state;
  }
}
