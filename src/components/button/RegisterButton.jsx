import "./button.css";
import { Link } from "react-router-dom";
import registerButtonImg from "../../assets/icon-register.svg";
export default function RegisterButton() {
  return (
    <li class="only-pc">
      <Link to="/login" class="button gray">
        <img src={registerButtonImg} alt="" />
        <span>회원가입</span>
      </Link>
    </li>
  );
}
