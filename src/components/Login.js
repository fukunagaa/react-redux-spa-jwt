import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import className from "classnames";
import { loadLogin } from "../redux/actions";
import Icon from "../assets/lock-black-18dp.svg";

const Login = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(loadLogin({ isLogin: true }));
  };
  console.log(Icon);
  return (
    <div className={"main-container"}>
      <div className={"contents-container"}>
        <div className={"title-container"}>
          <div className={"text-align-center"}>
            <div className={"logo-circle-area"}>
              <img className={"login-logo no-select white"} src={Icon} />
            </div>
          </div>
          <h3 className={"text-align-center"}>Login</h3>
        </div>
        <div className={"form-container"}>
          <div className={"input-big-area"}>
            <label className="label-input-placeholder">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="&nbsp;"
                required
                className={"label-input-placeholder"}
              />
              <span className="label-placeholder">Email Address *</span>
            </label>
          </div>
          <div className={"input-big-area"}>
            <label className="label-input-placeholder">
              <input
                type="text"
                name="password"
                id="password"
                placeholder="&nbsp;"
                required
                className={"label-input-placeholder"}
              />
              <span className="label-placeholder">Password *</span>
            </label>
          </div>
          <div className={"checkbox-container"}>
            <label>
              <input
                type="checkbox"
                name="remenber"
                id="remenber"
                className={"checkbox-input"}
              />
              <span className={"checkbox-parts"}>remenber me</span>
            </label>
          </div>
          <div className={"submit-btn-area"}>
            <button className={"submit-btn"} onClick={() => login()}>
              Login
            </button>
          </div>
          <div className={"link-login-container"}>
            <div>
              <a href="/forget">パスワードを忘れた?</a>
            </div>
            <div>
              <Link to="/signup">アカウント作成</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
