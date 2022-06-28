import "./category.css";

export default function Category(props) {
  return (
    <>
      <dl class="category">
        <dt class="a11y-hidden">Category</dt>
        {props.category.map((category, index) => {
          return (
            <>
              <dd key={index}>{category}</dd>
            </>
          );
        })}
      </dl>
    </>
  );
}
