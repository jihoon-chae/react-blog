import "./posts.css";
import Post from "../post/Post";

export default function Posts(props) {
  return (
    <div class="max-width">
      <h2 class="a11y-hidden">Post</h2>
      <ul class="posts">
        <Post posts={props.posts} />
      </ul>
    </div>
  );
}
