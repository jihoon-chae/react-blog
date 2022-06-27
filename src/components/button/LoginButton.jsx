import "./button.css";
import { Link } from 'react-router-dom';
export default function LoginButton() {
  return (
    <li>
      <Link to="/login" class="button gray">
        <img src="./assets/icon-login.svg" alt="" />
        <span>로그인</span>
      </Link>
    </li>
  );
}
