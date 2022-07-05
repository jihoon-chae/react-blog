import "./button.css";
import logoutButtonImg from "../../assets/icon-logout.svg"

export default function LogoutButton(props) {
  return (
    <li onClick={props.handleClick}>
      <button class="button white">
        <img src={logoutButtonImg} alt="" />
        <span>로그아웃</span>
      </button>
    </li>
  );
}
