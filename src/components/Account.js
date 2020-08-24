import React from "react";
import { useDispatch } from "react-redux";
import { loadLogin } from "../redux/actions";
import className from "classnames";
import Icon from "../assets/cat-icon1.jpg";

const Account = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(loadLogin({ isLogin: false }));
  };
  return (
    <div className={"main-countainer"}>
      <div className={"account-container"}>
        <header className={"account-info-container"}>
          <div className={"account-image-area"}>
            <div className={"account-image-box"}>
              <img className={"account-icon"} src={Icon} />
            </div>
          </div>
          <section className={"account-section-area"}>
            <div className={"section-title-area"}>
              <h3>hogehoge</h3>
              <button>フォローする</button>
            </div>
            <ul className={"section-sub-area"}>
              <li className={"section-sub-li"}>投稿222件</li>
              <li className={"section-sub-li"}>フォロワー6700人</li>
              <li className={"section-sub-li"}>フォロー数5001人</li>
            </ul>
            <p>田中　太郎</p>
            <p>このアカウントはテスト用のものである。</p>
            <a href="http://example.co.jp">http://example.co.jp</a>
          </section>
        </header>
        <hr />
        <div>aaa</div>
      </div>
    </div>
  );
};

export default Account;
