import "./profile.css";
import profileImg from "../../assets/jihoon.jpeg"

export default function Profile() {
  return (
    <>
      <li class="profile-img">
        <a href="#">
          <img src={profileImg} alt="My Page" />
        </a>
      </li>
    </>
  );
}
