import "./author.css";

export default function Author(props) {
  return (
    <dl class="author-wrap">
      <dt class="a11y-hidden">Author</dt>
      <dd class="author">
        <img src={props.posts[props.index].profileImg} alt="" />
        {props.posts[props.index].userName}
      </dd>
      <dt class="a11y-hidden">Created</dt>
      <dd class="created">{props.posts[props.index].created}</dd>
    </dl>
  );
}
