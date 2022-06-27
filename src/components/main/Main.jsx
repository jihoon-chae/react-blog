import "./main.css";
import Posts from "../posts/Posts";
import About from "../about/About";

export default function Main(props) {
  return (
    <main>
      <div class="max-width">
        <h2 class="a11y-hidden">Post</h2>
        <Posts />
        {props.isLogin ? <About /> : <></>}
      </div>
    </main>
  );
}
