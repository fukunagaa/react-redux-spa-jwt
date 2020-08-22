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
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name *"
                required
                className={"signup-name-input"}
              />
            </div>
            <div className={"signuo-name-input-area"}>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name *"
                required
                className={"signup-name-input"}
              />
            </div>
          </div>
          <div className={"signup-input-container"}>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email Address *"
              required
              className={"signup-input"}
            />
          </div>
          <div className={"signup-input-container"}>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password *"
              required
              className={"signup-input"}
            />
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
