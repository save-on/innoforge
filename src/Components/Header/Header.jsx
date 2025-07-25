import "./Header.css";
import logo from "../../assets/logo_transp_white.png";
import AniLogo from "../AniLogo/AniLogo";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <AniLogo />
        <h1 className="header__title">save_on</h1>
        <div className="header__name">
          <p className="header__name_first">sayvon</p>
          <p className="header__name_last">edmondson</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
