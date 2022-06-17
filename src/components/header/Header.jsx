import { Link } from "react-router-dom";

import "./header.css";
import LogoutButton from "../button/LogoutButton.jsx";
import WriteButton from "../button/WriteButton";

export default function Header() {
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
            {/* 로그인  */}
            {/* <li class="profile-img">
              <a href="#">
                <img src="./assets/jihoon.jpeg" alt="My Page" />
              </a>
            </li> */}
            <WriteButton />

            {/* <LogoutButton /> */}

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
          </ul>
        </div>
      </header>
    </>
  );
}
