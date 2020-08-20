import { userInitialState } from "../initialState";
import { LOAD_LOGIN } from "../actionTypes";

export default function (state = userInitialState, action) {
  switch (action.type) {
    case LOAD_LOGIN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    default:
      return state;
  }
}
