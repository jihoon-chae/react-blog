import { Link } from "react-router-dom";

import "./post.css";
import Category from "../category/Category";
import Author from "../author/Author";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Post(props) {
  useEffect(() => {
    axios
      .get("https://jihoon-chae.github.io/react-blog/public/data.json")
      .then((result) => {
        props.setPosts([...result.data.posts]);
      });
  }, []);

  return (
    <>
      {props.posts.map((post) => {
        return (
          <li key={post.id}>
            <Link to="/post" className='post'>
              <article>
                <img src={post.thumbnail} alt="" />
                <div class="contents-wrap">
                  <Category posts={props.posts} />
                  <h3>{post.title}</h3>
                  <Author />
                  <p class="post-description">{post.contents[0].text}</p>
                </div>
              </article>
            </Link>
          </li>
        );
      })}
    </>
  );
}
