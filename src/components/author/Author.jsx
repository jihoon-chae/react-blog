import "./author.css";

export default function Author(props) {
  return (
    <dl class="author-wrap">
      <dt class="a11y-hidden">Author</dt>
      <dd class="author">
        <img src={props.profileImg} alt="" />
        {props.userName}
      </dd>
      <dt class="a11y-hidden">Created</dt>
      <dd class="created">{props.created}</dd>
    </dl>
  );
}
