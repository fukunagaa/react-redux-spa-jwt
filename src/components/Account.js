import React from "react";
import { useDispatch } from "react-redux";
import { loadLogin } from "../redux/actions";
import className from "classnames";
import Icon from "../assets/cat-icon1.jpg";
import articlesIcon from "../assets/articles.svg";
import tagIcon from "../assets/tag-face.svg";
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
              <p className={"section-user-phrase"}>
                このアカウントはテスト用のものである。
                <br />
                DEMO HOOK
                <br />
                ■■●●♪♪
                <br />
                <a className={"section-user-link"} href="#">
                  @demo_hook
                </a>
              </p>
              <a className={"section-link"} href="http://example.co.jp">
                http://example.co.jp
              </a>
            </div>
          </section>
        </header>
        <hr />
        <div className={"article-selector-container"}>
          <a
            className={
              "article-selector-article article-selector none-decoration-a"
            }
            href="#"
          >
            <span className={"article-selector-span"}>
              <img className={"article-selector-icon"} src={articlesIcon} />
              <span className={"article-selector-sub-text"}>投稿</span>
            </span>
          </a>
          <a className={"article-selector none-decoration-a"} href="#">
            <span className={"article-selector-span"}>
              <img className={"article-selector-icon"} src={tagIcon} />
              <span className={"article-selector-sub-text"}>
                タグ付けされている人
              </span>
            </span>
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
