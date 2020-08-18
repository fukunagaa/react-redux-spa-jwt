import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/">
          <Test />
        </Route>
        <Route exact path="/login">
          <Test />
        </Route>
        <Route path="/about">
          <Test2 />
        </Route>
        <Route path="/user">
          <Test3 />
        </Route>
        <Route path="/admin">
          <Test4 />
        </Route>
      </Layout>
    </Router>
  );
};

export default App;
