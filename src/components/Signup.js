import React from "react";
import { Link } from "react-router-dom";
import className from "classnames";
import Icon from "../assets/create-signup.svg";

const Signup = () => {
  return (
    <div className={"signup-container"}>
      <div className={"signup-sub-countainer"}>
        <div className={"title-container"}>
          <div className={"signup-logo-container"}>
            <div className={"circle-logo"}>
              <img className={"signup-image-logo white"} src={Icon} />
            </div>
          </div>
          <h3 className={"signup-title"}>Sign up</h3>
        </div>
        <div className={"signup-form"}>
          <div className={"signup-input-two-container"}>
            <div className={"signuo-name-input-area"}>
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
            <div className={"signuo-name-input-area"}>
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
          <div className={"signup-input-container"}>
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
          <div className={"signup-input-container"}>
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
          <div className={"signup-button-container"}>
            <button className={"signup-button"} onClick={() => signup()}>
              Sign up
            </button>
          </div>
          <div className={"select-container"}>
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
