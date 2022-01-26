import React from "react";
import { Link } from "react-router-dom";

import Dropdown from "../components/Dropdown";
import img from "../assets/image/tyziiu.jpg";

const userMenu = [
  {
    path: "/",
    icon: "bx bx-user",
    content: "Trang cá nhân",
  },
  {
    path: "/",
    icon: "bx bx-log-in-circle bx-rotate-180",
    content: "Đăng nhập",
  },
  {
    path: "/",
    icon: "bx bx-log-out-circle bx-rotate-180",
    content: "Đăng xuất",
  },
];

const renderUserToggle = () => (
  <div className="user-control">
    <div className="user-control__icon">
      <i className="bx bx-menu"></i>
    </div>
    <div className="user-control__image">
      <img src={img} alt="hinhAnh" />
    </div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to={item.path} key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const UserControlButton = (props) => {
  return (
    <Dropdown
      customToggle={() => renderUserToggle()}
      contentData={userMenu}
      renderItems={(item, index) => renderUserMenu(item, index)}
    />
  );
};

export default UserControlButton;
