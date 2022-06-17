import React from "react";
import { BrowserRouter, Route} from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/Homepage.jsx";
import PostView from "./pages/post-view/Post-view";

function App() {
  return (
    <>
      <BrowserRouter>
          <Route path="/" exact component={Homepage} />
          <Route path="/post" exact component={PostView} />
      </BrowserRouter>
    </>
  );
}

export default App;
