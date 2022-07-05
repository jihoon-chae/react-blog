import "./button.css";
import { Link } from 'react-router-dom';
import loginButton from "../../assets/icon-login.svg"
export default function LoginButton() {
  return (
    <li>
      <Link to="/login" class="button gray">
        <img src={loginButton} alt="" />
        <span>로그인</span>
      </Link>
    </li>
  );
}
