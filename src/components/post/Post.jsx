import { Link } from "react-router-dom";

import "./post.css";
import Category from "../category/Category";
import Author from "../author/Author";

export default function Post(props) {
  return (
    <>
      {props.posts.map((post, index) => {
        return (
          <li key={post.id}>
            <Link to="/post" className="post">
              <article>
                <img src={post.thumbnail} alt="" />
                <div class="contents-wrap">
                  <Category posts={props.posts} post={post} />
                  <h3>{post.title}</h3>
                  <Author posts={props.posts} post={post} index={index} />
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
