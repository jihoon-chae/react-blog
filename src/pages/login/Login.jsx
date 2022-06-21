import { Link } from "react-router-dom";
import "./login.css";
// import {setIsLogin} from '../../components/header/Header';

export default function Login(props) {
  return (
    <article class="container-login-modal">
      <div class="top-login-modal">
        <h2>로그인 또는 회원가입</h2>
        {/* <img class="button-close" src="./assets/close.png" alt="닫기 버튼" /> */}
      </div>
      <div class="content-login-modal">
        <p class="text-login-modal">
          My Blog에서 여러분의 궁금증을 해결하세요!:)
        </p>
        <input type="text" name="user-id" id="user-id" placeholder="아이디" />
        <label for="user-id"></label>
        <p class="input-user-id">아이디를 입력해 주세요</p>
        <label for="user-pw">
          <input
            type="password"
            name="user-pw"
            id="user-pw"
            placeholder="비밀번호"
          />
        </label>
        <p class="warning-login">아이디 혹은 비밀번호와 일치하지 않습니다.</p>
        <div class="maintain"></div>
        <Link to="/" class="button-login button-original " onClick={props.handleClick}>
          로그인
        </Link>

        <div class="container-join-find">
          <div class="find-join">
            <a href="#none" class="link-join">
              회원가입
            </a>
            <a href="#none" class="link-id">
              아이디 /
            </a>
            <a href="#none" class="link-pw">
              비밀번호 찾기
            </a>
          </div>
        </div>

        <span class="or-txt">또는</span>

        <a href="#none" class="button-login button-google">
          구글 계정으로 로그인
        </a>
        <a href="#none" class="button-login button-facebook">
          페이스북 계정으로 로그인
        </a>
        <a href="#none" class="button-login button-naver">
          네이버 계정으로 로그인
        </a>
        <a href="#none" class="button-login button-kakao">
          카카오톡 계정으로 로그인
        </a>
      </div>
    </article>
  );
}
