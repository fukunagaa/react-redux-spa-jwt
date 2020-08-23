import React from "react";
import { Link } from "react-router-dom";
import className from "classnames";
import Icon from "../assets/create-signup.svg";

const Signup = () => {
  return (
    <div className={"main-container"}>
      <div className={"contents-container"}>
        <div className={"title-container"}>
          <div className={"text-align-center"}>
            <div className={"logo-circle-area"}>
              <img className={"signup-logo no-select white"} src={Icon} />
            </div>
          </div>
          <h3 className={"text-align-center"}>Sign up</h3>
        </div>
        <div className={"form-container"}>
          <div className={"input-flex-row-container"}>
            <div className={"input-small-area"}>
              <label className="label-input-placeholder">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="&nbsp;"
                  required
                  className={"label-input-placeholder"}
                />
                <span className="label-placeholder">First Name *</span>
              </label>
            </div>
            <div className={"input-small-area"}>
              <label className="label-input-placeholder">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="&nbsp;"
                  required
                  className={"label-input-placeholder"}
                />
                <span className="label-placeholder">Last Name *</span>
              </label>
            </div>
          </div>
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
                name="mailmagazine"
                id="mailmagazine"
                className={"checkbox-input"}
              />
              <span className={"checkbox-parts"}>メールマガジン登録</span>
            </label>
          </div>
          <div className={"submit-btn-area"}>
            <button className={"submit-btn"} onClick={() => signup()}>
              Sign up
            </button>
          </div>
          <div className={"link-signup-container"}>
            <div>
              <Link to="/login">ログインへ</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
