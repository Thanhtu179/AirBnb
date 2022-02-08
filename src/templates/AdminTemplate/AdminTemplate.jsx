import React from "react";
import { Route, Redirect, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import DrawerModel from "../../components/DrawerModel";
import { closeDrawer } from "../../redux/Actions/AdminControlAction";

const AdminTemplate = (props) => {
  const { sidebarToggle } = useSelector((state) => state.AdminControlReducer);

  const dispatch = useDispatch();
  const { modalDrawer } = useSelector((state) => state.AdminControlReducer);
  const { drawerVisible, drawerContent, drawerTitle } = modalDrawer;
  console.log("first", props);

  const handleCloseModal = () => {
    dispatch(closeDrawer());
  };
  const { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <div className="admin-template">
            <DrawerModel
              title={drawerTitle}
              Component={drawerContent}
              onClose={handleCloseModal}
              visible={drawerVisible}
            />
            <Sidebar path={props.path} />
            <div
              className={`admin-template__content ${
                sidebarToggle ? "toggle" : null
              }`}
            >
              <TopNav />
              <div className="admin-template__content-main">
                <Component {...propsRoute} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default AdminTemplate;
