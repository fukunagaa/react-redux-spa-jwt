import React from "react";
import { useDispatch } from "react-redux";
import { loadLogin } from "../redux/actions";

const Account = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(loadLogin({ isLogin: false }));
  };
  return (
    <div>
      <div>account logout</div>
      <div>
        <button onClick={() => logout()}>logout</button>
      </div>
    </div>
  );
};

export default Account;
