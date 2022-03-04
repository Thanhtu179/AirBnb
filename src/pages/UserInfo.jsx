import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Helmet from "../components/Helmet";
import img from "../assets/image/user.png";
import { OutlineButton } from "../components/Button";
import DrawerModel from "../components/DrawerModel";
import { closeDrawer, openDrawer } from "../redux/Actions/AdminControlAction";
import { getUserInfoAction } from "../redux/Actions/ManagerUsersAction";
import EditUser from "../components/managerUsers/EditUser";
import EditUserImage from "../components/managerUsers/EditUserImage";

const UserInfo = (props) => {
  // let id = "61c6b2a1d1aba6001cf0cdcd";
  let { id } = props.match.params;
  const dispatch = useDispatch();
  const { modalDrawer } = useSelector((state) => state.AdminControlReducer);
  const { drawerVisible, drawerContent, drawerTitle } = modalDrawer;
  const { userInfoById } = useSelector((state) => state.ManagerUsersReducer);

  const handleCloseModal = () => {
    dispatch(closeDrawer());
  };

  useEffect(() => {
    dispatch(getUserInfoAction(id));
  }, []);

  return (
    <Helmet title="thong tin ca nhan">
      <DrawerModel
        title={drawerTitle}
        Component={drawerContent}
        onClose={handleCloseModal}
        visible={drawerVisible}
      />
      <Header />
      <div className="container">
        <div className="user-info">
          <div className="row">
            <div className="col-3 col-xl-4 col-lg-12">
              <div className="user-info__left">
                <div className="user-info__left__img">
                  <img
                    src={userInfoById.avatar ? userInfoById.avatar : img}
                    alt="hinh anh"
                  />
                  <h4
                    onClick={() => {
                      dispatch(
                        openDrawer(
                          "Chỉnh sữa ảnh",
                          <EditUserImage id={userInfoById._id} />
                        )
                      );
                    }}
                  >
                    Cập nhật hình ảnh
                  </h4>
                </div>
                <div className="user-info__left__armorial">
                  <i className="bx bx-check-shield"></i>
                  <h3>Xác minh danh tính</h3>
                  <p>
                    Xác định danh tính của bạn với huy hiệu xác minh danh tính
                  </p>
                  <OutlineButton>Xác nhận huy hiệu</OutlineButton>
                </div>
                <div className="user-info__left__verification">
                  <h3>Đã xác nhận</h3>
                  <ul>
                    <li>
                      <i className="bx bx-check"></i>
                      <span>Địa chỉ email</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9 col-xl-8 col-lg-12">
              <div className="user-info__right">
                <h2>{`Xin chào tôi là ${userInfoById.name}`} </h2>
                <div className="user-info__right__info">
                  <div className="user-info__right__info__title">
                    <h2>Thông tin người dùng</h2>
                    <div
                      className="user-info__right__info__title__btn"
                      onClick={() =>
                        dispatch(
                          openDrawer(
                            "Chỉnh sữa thông tin",
                            <EditUser id={userInfoById._id} />
                          )
                        )
                      }
                    >
                      <i className="bx bx-edit-alt"></i>
                      <span>Chỉnh sữa</span>
                    </div>
                  </div>
                  <div className="user-info__right__info__menu">
                    <div className="row" style={{ marginLeft: 15 }}>
                      <div className="col-4">
                        <p>Tên:</p>
                      </div>
                      <div className="col-8">
                        <span>{userInfoById.name}</span>
                      </div>
                    </div>
                    <div className="row" style={{ marginLeft: 15 }}>
                      <div className="col-4">
                        <p>Email:</p>
                      </div>
                      <div className="col-8">
                        <span>{userInfoById.email}</span>
                      </div>
                    </div>
                    <div className="row" style={{ marginLeft: 15 }}>
                      <div className="col-4">
                        <p>Số điện thoại:</p>
                      </div>
                      <div className="col-8">
                        <span>{userInfoById.phone}</span>
                      </div>
                    </div>
                    <div className="row" style={{ marginLeft: 15 }}>
                      <div className="col-4">
                        <p>Ngày sinh:</p>
                      </div>
                      <div className="col-8">
                        <span>{userInfoById.birthday}</span>
                      </div>
                    </div>
                    <div className="row" style={{ marginLeft: 15 }}>
                      <div className="col-4">
                        <p>Giới tính:</p>
                      </div>
                      <div className="col-8">
                        <span>{userInfoById.gender ? "Nam" : "Nữ"}</span>
                      </div>
                    </div>
                    <div className="row" style={{ marginLeft: 15 }}>
                      <div className="col-4">
                        <p>Địa chỉ:</p>
                      </div>
                      <div className="col-8">
                        <span>{userInfoById.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Helmet>
  );
};

export default UserInfo;
