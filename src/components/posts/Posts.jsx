import "./posts.css";
import Post from "../post/Post";
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Posts() {
  const [posts, setposts] = useState([])

  useEffect(() => {
    axios
    .get("https://jihoon-chae.github.io/react-blog/public/data.json")
    .then((result) => {
      setposts([...result.data.posts])
    });
  }, [])
  return (
    <div class="max-width">
      <h2 class="a11y-hidden">Post</h2>
      <ul class="posts">
        <Post posts={posts} />
      </ul>
    </div>
  );
}
