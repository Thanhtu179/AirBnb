import React from "react";
import { Link } from "react-router-dom";

import Dropdown, { DropdownDefault } from "../components/Dropdown";
import { TOKEN, USER_INFO, USER_LOGIN } from "../utils/settingSystem";
import { history } from "../App";
import userImg from "../assets/image/user.png";

const UserControlButton = (props) => {
  let userInfo = JSON.parse(localStorage.getItem(USER_INFO));

  return (
    <div className={`user-control ${props.bgWhite ? "bg-white" : null}`}>
      <div className="user-control__icon">
        <i className="bx bx-menu"></i>
      </div>
      <div
        className="user-control__image"
        style={{
          backgroundImage: `url(${
            userInfo?.avatar ? userInfo.avatar : userImg
          })`,
        }}
      ></div>
      <div className="user-control__content">
        {userInfo ? (
          <>
            <div
              onClick={() => {
                history.push(`/user-info/${userInfo._id}`);
              }}
            >
              <div className="notification-item">
                <i className="bx bx-user"></i>
                <span>Trang cá nhân</span>
              </div>
            </div>
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
          </>
        ) : (
          <>
            <div
              onClick={() => {
                history.push("/login-register/sign-in");
              }}
            >
              <div className="notification-item">
                <i className="bx bx-log-in-circle bx-rotate-180"></i>
                <span>Đăng nhập</span>
              </div>
            </div>
            <div
              onClick={() => {
                history.push("/login-register/sign-up");
              }}
            >
              <div className="notification-item">
                <i className="bx bxs-book-reader"></i>
                <span>Đăng ký</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserControlButton;
