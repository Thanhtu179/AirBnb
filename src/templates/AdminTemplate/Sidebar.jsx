import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/image/logo-full.png";
import logoToggle from "../../assets/image/logo-white.png";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span className={`${props.toggle ? "toggle" : null}`}>
          {props.title}
        </span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const { sidebarToggle } = useSelector((state) => state.AdminControlReducer);
  const sidebar_items = [
    {
      display_name: "Quản lý người dùng",
      route: "/admin/ManagerUsers",
      icon: "bx bx-user",
    },
    {
      display_name: "Quản lý vị trí",
      route: "/admin/ManagerLocation",
      icon: "bx bxs-map",
    },
    {
      display_name: "Quản lý phòng",
      route: "/admin/ManagerRooms",
      icon: "bx bx-building-house",
    },
  ];

  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.path
  );

  return (
    <div className={`sidebar ${sidebarToggle ? "toggle" : ""}`}>
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
      </div>
      <div className="sidebar__logo--toggle">
        <img src={logoToggle} alt="logo" />
      </div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
            toggle={sidebarToggle}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
