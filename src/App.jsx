import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Login from './pages/login/Login';

import "./App.css";
import Homepage from "./pages/homepage/Homepage.jsx";
import PostView from "./pages/post-view/Post-view";

function App() {
  return (
    <>
      <BrowserRouter>
          <Route path="/" exact component={Homepage} />
          <Route path="/post" exact component={PostView} />
          <Route path="/login" exact component={Login} />
      </BrowserRouter>
    </>
  );
}

export default App;
