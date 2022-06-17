import { Link } from "react-router-dom";
import "./button.css";

export default function WriteButton() {
  return (
    <li>
      <Link to="/login" class="button">
          <img src="./assets/icon-modify-white.svg" alt="" />
          <span>Write</span>
      </Link>
    </li>
  );
}
