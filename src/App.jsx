import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { useState } from "react";

import "./App.css";
import Homepage from "./pages/homepage/Homepage.jsx";
import PostView from "./pages/post-view/Post-view";

function App() {
  // state 설정
  const [isLogin, setIsLogin] = useState(false);

  // 로그인 되어있는지 확인 후 state 변경
  const handleClick = () => {
    isLogin ? setIsLogin(false) : setIsLogin(true);
  };
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact render={() => <Homepage isLogin={isLogin} handleClick={handleClick} />} />
        <Route path="/post" exact component={PostView} />
        <Route
          path="/login"
          exact
          render={() => <Login handleClick={handleClick} />}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
