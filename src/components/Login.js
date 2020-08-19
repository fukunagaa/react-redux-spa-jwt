import React from "react";
import className from "classnames";

const Login = () => {
  return (
    <div className={"login-container"}>
      <div className={"login-sub-countainer"}>
        <div className={"title-container"}>
          <h3 className={"login-title"}>Login</h3>
        </div>
        <div className={"login-form"}>
          <div className={"login-input-container"}>
            <input
              type="text"
              name="email"
              placeholder="Email Address *"
              required
              className={"login-input"}
            />
          </div>
          <div className={"login-input-container"}>
            <input
              type="text"
              name="password"
              placeholder="Password *"
              required
              className={"login-input"}
            />
          </div>
          <div className={"checkbox-container"}>
            <label>
              <input
                type="checkbox"
                name="remenber"
                className={"checkbox-input"}
              />
              <span className={"checkbox-parts"}>remenber me</span>
            </label>
          </div>
          <div className={"login-button-container"}>
            <button className={"login-button"}>Login</button>
          </div>
          <div className={"create-container"}>
            <div>
              <a href="/forget">パスワードを忘れた?</a>
            </div>
            <div>
              <a href="/signup">アカウント作成</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
