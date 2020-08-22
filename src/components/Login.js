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
    <div className={"login-container"}>
      <div className={"login-sub-countainer"}>
        <div className={"title-container"}>
          <div className={"login-logo-container"}>
            <div className={"circle-logo"}>
              <img className={"image-logo white"} src={Icon} />
            </div>
          </div>
          <h3 className={"login-title"}>Login</h3>
        </div>
        <div className={"login-form"}>
          <div className={"login-input-container"}>
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
          <div className={"login-input-container"}>
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
          <div className={"login-button-container"}>
            <button className={"login-button"} onClick={() => login()}>
              Login
            </button>
          </div>
          <div className={"create-container"}>
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
