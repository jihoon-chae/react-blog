import './header.css'
import Button from '../button/Button'

export default function Header(){
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
					<li class="profile-img">
						<a href="#">
							<img src="./assets/jihoon.jpeg" alt="My Page" />
						</a>
					</li>
					<li>
						<a href="#" class="button">
							<img src="  ./assets/icon-modify-white.svg" alt="" />
							<span>Write</span>
						</a>
					</li>
					<li>
						<Button />
					</li>
				 {/* //로그인  */}


				 {/* 로그아웃
			
					<li>
						<a href="#" class="button gray">
							<img src="./assets/icon-login.svg" alt="" />
							<span>Login</span>
						</a>
					</li>
					<li class="only-pc">
						<a href="#" class="button gray">
							<img src="./assets/icon-register.svg" alt="" />
							<span>Register</span>
						</a>
					</li>
          
					// 로그아웃 */}

				</ul>
			</div>
		</header>
    </>
  )
}