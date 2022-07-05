import { Link } from "react-router-dom";
import "./button.css";
import writeButtonImg from "../../assets/icon-modify-white.svg"

export default function WriteButton() {
  return (
    <li>
      <Link to="/login" class="button">
          <img src={writeButtonImg} alt="" />
          <span>Write</span>
      </Link>
    </li>
  );
}
