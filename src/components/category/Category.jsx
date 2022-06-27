import "./category.css";

export default function Category(props) {
  return (
    <>
      <dl class="category">
        <dt class="a11y-hidden">Category</dt>
        {props.post.category.map((category) => {
          return (
            <>
              <dd key={props.post.id}>{category}</dd>
            </>
          );
        })}
      </dl>
    </>
  );
}
