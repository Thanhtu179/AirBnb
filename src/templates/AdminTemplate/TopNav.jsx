import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import userImg from "../../assets/image/user.png";
import Dropdown, { DropdownDefault } from "../../components/Dropdown";
import { setSiderBar } from "../../redux/Actions/AdminControlAction";
import { TOKEN, USER_INFO, USER_LOGIN } from "../../utils/settingSystem";

import { history } from "../../App";

const TopNav = () => {
  let userInfo = {};

  const dispatch = useDispatch();

  if (!localStorage.getItem(USER_INFO)) {
    alert("Bạn chưa đăng nhập vui lòng đăng nhập !");
    return <Redirect to="/" />;
  } else {
    userInfo = JSON.parse(localStorage.getItem(USER_INFO));
    if (userInfo.type !== "ADMIN") {
      alert("Bạn khong co quyen truy cap trang nay !");
      return <Redirect to="/" />;
    }
  }

  const notifications = [
    {
      icon: "bx bx-error",
      content: "Curabitur id eros quis nunc suscipit blandit",
    },
    {
      icon: "bx bx-package",
      content:
        "Duis malesuada justo eu sapien elementum, in semper diam posuere",
    },
    {
      icon: "bx bx-cart",
      content: "Donec at nisi sit amet tortor commodo porttitor pretium a erat",
    },
    {
      icon: "bx bx-error",
      content: "In gravida mauris et nisi",
    },
    {
      icon: "bx bx-cart",
      content: "Curabitur id eros quis nunc suscipit blandit",
    },
  ];

  const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  );

  const renderUserToggle = (userInfo) => (
    <div className="topnav__right-user">
      <div
        className="topnav__right-user__image"
        style={{
          backgroundImage: `url(${
            userInfo?.avatar ? userInfo.avatar : userImg
          })`,
        }}
      ></div>
      <div className="topnav__right-user__name">{userInfo.name}</div>
    </div>
  );

  return (
    <div className="topnav">
      <div className="topnav__wrap">
        <div className="topnav__toggle" onClick={() => dispatch(setSiderBar())}>
          <i className="bx bx-log-out"></i>
        </div>
        <div className="topnav__right">
          <div className="topnav__right-item">
            {/* dropdown here */}
            <DropdownDefault customToggle={() => renderUserToggle(userInfo)}>
              <Link to="/">
                <div
                  className="notification-item"
                  onClick={() => history.push(`/users/${userInfo._id}`)}
                >
                  <i className="bx bx-user"></i>
                  <span>Thông tin cá nhân</span>
                </div>
              </Link>
              <div
                onClick={() => {
                  localStorage.removeItem(USER_LOGIN);
                  localStorage.removeItem(TOKEN);
                  localStorage.removeItem(USER_INFO);
                  history.push("/home");
                  window.location.reload();
                }}
              >
                <div className="notification-item">
                  <i className="bx bx-log-out-circle bx-rotate-180"></i>
                  <span>Đăng Xuất</span>
                </div>
              </div>
            </DropdownDefault>
          </div>
          <div className="topnav__right-item">
            <Dropdown
              icon="bx bx-bell"
              badge="12"
              contentData={notifications}
              renderItems={(item, index) => renderNotificationItem(item, index)}
              renderFooter={() => <Link to="/">View All</Link>}
            />
            {/* dropdown here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
