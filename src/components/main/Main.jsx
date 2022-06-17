import "./main.css";
import Posts from "../posts/Posts";

export default function Main() {
  return (
    <main>
      <div class="max-width">
        <h2 class="a11y-hidden">Post</h2>
        <Posts />
      </div>
    </main>
  );
}
