import "./button.css";

export default function LogoutButton(props) {
  return (
    <li onClick={props.handleClick}>
      <button class="button white">
        <img src="./assets/icon-logout.svg" alt="" />
        <span>로그아웃</span>
      </button>
    </li>
  );
}
