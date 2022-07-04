import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Login from "./pages/login/Login";
import Homepage from "./pages/homepage/Homepage.jsx";
import PostView from "./pages/post-view/Post-view";

function App() {
  // state 설정
  const [isLogin, setIsLogin] = useState(false);

  // 로그인 되어있는지 확인 후 state 변경
  const handleClick = () => {
    isLogin ? setIsLogin(false) : setIsLogin(true);
  };

  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jihoon-chae.github.io/react-blog/public/data.json")
      .then((result) => {
        setposts([...result.data.posts]);
      });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => (
            <Homepage
              isLogin={isLogin}
              handleClick={handleClick}
              posts={posts}
            />
          )}
        />
        <Route
          path="/post/:id"
          exact
          // component={PostView}
          render={() => (
            <PostView
              posts={posts}
              isLogin={isLogin}
              handleClick={handleClick}
            />
          )}
        />
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
