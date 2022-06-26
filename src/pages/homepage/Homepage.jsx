import Header from "../../components/header/Header.jsx";
import Banner from '../../components/banner/Banner.jsx';
import Main from '../../components/main/Main.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './homepage.css'

export default function Homepage(props) {
 
  return (
    <>
      <Header isLogin={props.isLogin} handleClick={props.handleClick}/>
      <Banner />
      <Main isLogin={props.isLogin} handleClick={props.handleClick}/>
      <Footer />
    </>
  );
}
