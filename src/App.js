import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./components/Layout";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";
import Login from "./components/Login";
import Account from "./components/Account";
import Signup from "./components/Signup";

const App = () => {
  const user = useSelector((state) => state.user);
  const isLogin = user.isLogin;
  console.log("isLogin :" + isLogin);
  return (
    <Router>
      <Layout>
        <Route exact path="/">
          <Test />
        </Route>
        <Route exact path="/login">
          {isLogin ? <Redirect to={"/"} /> : <Login />}
        </Route>
        <Route exact path="/account">
          {isLogin ? <Account /> : <Redirect to={"/login"} />}
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="/about">
          <Test2 />
        </Route>
        <Route path="/user">
          {isLogin ? <Test3 /> : <Redirect to="/login" />}
        </Route>
        <Route path="/admin">
          {isLogin ? <Test4 /> : <Redirect to="/login" />}
        </Route>
      </Layout>
    </Router>
  );
};

export default App;
