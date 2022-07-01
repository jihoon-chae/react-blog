import { Link } from "react-router-dom";

import "./post.css";
import Category from "../category/Category";
import Author from "../author/Author";

export default function Post(props) {
  return (
    <>
      {props.posts.map((post) => {
        return (
          <li key={post.id}>
            <Link to={`/post/${post.id}`} className="post">
              <article>
                <img src={post.thumbnail} alt="" />
                <div class="contents-wrap">
                  <Category category={post.category} />
                  <h3>{post.title}</h3>
                  <Author
                    profileImg={post.profileImg}
                    userName={post.userName}
                    created={post.created}
                  />
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
