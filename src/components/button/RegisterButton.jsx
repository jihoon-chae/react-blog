import "./button.css";
import { Link } from 'react-router-dom';
export default function RegisterButton() {
  return (
    <li class="only-pc">
      <Link to="/login" class="button gray">
        <img src="./assets/icon-register.svg" alt="" />
        <span>회원가입</span>
      </Link>
    </li>
  );
}
