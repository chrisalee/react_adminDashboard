import React from "react";
import "./TopNav.css";
import notifications from "../../assets/JsonData/notifications.json";
import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom";
import user_image from "../../assets/images/user.png";
import user_menu from "../../assets/JsonData/user_menus.json";

const current_user = {
  display_name: "Chris",
  image: user_image,
};

const renderNotificationsItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user_image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to ='/' key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
)

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="fa fa-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown 
            customToggle={() => renderUserToggle(current_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="fa fa-bell"
            badge="5"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationsItem(item, index)}
            renderFooter={() => <Link to="/">Veiw All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
