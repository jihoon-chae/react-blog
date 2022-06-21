import { Link } from "react-router-dom";

import "./post.css";
import Category from "../category/Category";
import Author from "../author/Author";
import axios from "axios";
// import '../../../public/data.json'

export default function Post() {
  axios
    .get("https://jihoon-chae.github.io/react-blog/public/data.json")
    .then((result) => {
      let copy = [...result.data.posts];
      console.log(copy[0].thumbnail);

      copy.map((a, i) => {
        return <Post />;
      });
      console.log(copy[0])
      console.log(result.data.posts[0]);
    });
  return (
    <>
      <li>
        <Link to="/post">
          <article>
            <img src="./assets/post-img6.jpg" alt="" />
            <div class="contents-wrap">
              <Category />

              <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

              <Author />

              <p class="post-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore illum nostrum perferendis voluptas, voluptate soluta
                corrupti dolore quidem. Placeat, eaque! Exercitationem est
                facilis dolor quas odio cum incidunt repudiandae vel. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                illum nostrum perferendis voluptas, voluptate soluta corrupti
                dolore quidem. Placeat, eaque! Exercitationem est facilis dolor
                quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem.
                Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                incidunt repudiandae vel. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem.
                Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                incidunt repudiandae vel."
              </p>
            </div>
          </article>
        </Link>
      </li>
    </>
  );
}
