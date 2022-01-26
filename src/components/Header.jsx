import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/image/logo-full.png";
import logoMini from "../assets/image/logo-white.png";
import UserControlButton from "../components/UserControlButton";

const Header = (props) => {
  return (
    <div className={`header `}>
      <div className="container header__wrap">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
        </div>
        <div className="header__logo--desktop">
          <Link to="/">
            <img src={logoMini} alt={logoMini} />
          </Link>
        </div>
        <div className="header__search">
          <div className="header__search__content">
            <p>Bắt đầu tìm kiếm</p>
          </div>
          <div className="header__search__icon">
            <i className="bx bx-search-alt"></i>
          </div>
        </div>
        <div className="header__nav">
          <div className="header__nav__item">
            <Link to="/">Trở thành chủ nhà</Link>
          </div>
          <div className="header__nav__item">
            <Link to="/">
              <i className="bx bx-world"></i>
            </Link>
          </div>
          <div className="header__nav__item">
            <UserControlButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
