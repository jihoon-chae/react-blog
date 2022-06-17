import "./main.css";
import Posts from "../posts/Posts";
import About from '../about/About';

export default function Main() {
  return (
    <main>
      <div class="max-width">
        <h2 class="a11y-hidden">Post</h2>
        <Posts />
        <About /> 
      </div>
    </main>
  );
}
