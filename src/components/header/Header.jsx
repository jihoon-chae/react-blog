import { Link } from "react-router-dom";

import "./header.css";
import LogoutButton from "../button/LogoutButton.jsx";
import WriteButton from "../button/WriteButton";
import Profile from '../profile/Profile.jsx';

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
                <li>
                  <Link to="/login" class="button gray">
                    <img src="./assets/icon-login.svg" alt="" />
                    <span>로그인</span>
                  </Link>
                </li>
                <li class="only-pc">
                  <Link to="/login" class="button gray">
                    <img src="./assets/icon-register.svg" alt="" />
                    <span>회원가입</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </header>
    </>
  );
}
