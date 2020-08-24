import React from "react";
import { useDispatch } from "react-redux";
import { loadLogin } from "../redux/actions";
import className from "classnames";
import Icon from "../assets/cat-icon1.jpg";
import articles from "../dummies/articles";

const Account = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(loadLogin({ isLogin: false }));
  };
  console.log(articles);
  return (
    <div className={"main-countainer"}>
      <div className={"account-container"}>
        <header className={"account-info-container"}>
          <div className={"account-image-area"}>
            <div className={"account-image-box"}>
              <img className={"account-icon"} src={articles[3].urlToImage} />
            </div>
          </div>
          <section className={"account-section-area"}>
            <div className={"section-title-area"}>
              <h2 className={"section-user-id"}>demo hook</h2>
              <div className={"follow-button-area"}>
                <button className={"follow-button"}>フォローする</button>
              </div>
            </div>
            <ul className={"section-sub-area"}>
              <li className={"section-sub-li"}>投稿222件</li>
              <li className={"section-sub-li"}>フォロワー6700人</li>
              <li className={"section-sub-li"}>フォロー数5001人</li>
            </ul>
            <div className={"section-user-info-area"}>
              <h1 className={"section-user-name"}>デモタロウ</h1>
              <p>このアカウントはテスト用のものである。</p>
              <a href="http://example.co.jp">http://example.co.jp</a>
            </div>
          </section>
        </header>
        <hr />
        <div className={"article-selector-container"}>
          <a className={"article-selector-article article-selector"} href="#">
            投稿
          </a>
          <a className={"article-selector"} href="#">
            タグ付けされている人
          </a>
        </div>
        <div className={"account-articles-container"}>
          <div className={"account-articles"}>
            <div className={"account-article"}>
              <img
                className={"account-article-image"}
                src={articles[0].urlToImage}
              />
            </div>
            <div className={"account-article"}>
              <img
                className={"account-article-image"}
                src={articles[1].urlToImage}
              />
            </div>
            <div className={"account-article"}>
              <img
                className={"account-article-image"}
                src={articles[2].urlToImage}
              />
            </div>
          </div>
          <div className={"account-articles"}>
            <div className={"account-article"}>
              <img
                className={"account-article-image"}
                src={articles[3].urlToImage}
              />
            </div>
            <div className={"account-article"}>
              <img
                className={"account-article-image"}
                src={articles[4].urlToImage}
              />
            </div>
            <div className={"account-article"}>
              <img
                className={"account-article-image"}
                src={articles[5].urlToImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
