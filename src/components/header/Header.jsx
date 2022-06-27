import "./header.css";
import LogoutButton from "../button/LogoutButton.jsx";
import WriteButton from "../button/WriteButton";
import LoginButton from "../button/LoginButton";
import RegisterButton from "../button/RegisterButton";
import Profile from "../profile/Profile.jsx";

export default function Header(props) {
  return (
    <>
      <header>
        <div class="max-width">
          <h1>
            <a href="./">
              <img src="./assets/Logo.svg" alt="My Blog" />
            </a>
          </h1>
          <ul>
            {props.isLogin ? (
              <>
                <Profile />
                <WriteButton />
                <LogoutButton handleClick={props.handleClick} />
              </>
            ) : (
              <>
                <WriteButton />
                <LoginButton />
                <RegisterButton />
              </>
            )}
          </ul>
        </div>
      </header>
    </>
  );
}
