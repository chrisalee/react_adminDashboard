import React from "react";
import "./Sidebar.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import sidebar_items from '../../assets/JsonData/sidebar_routes.json';

const Sidebar = (props) => {

  const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    
    return (
      <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" className="sidebar__logo" />
      </div>
      
      {
        sidebar_items.map((item, index) => (
          <Link to={item.route} key={index}>
            <SidebarItem 
              title={item.display_name}
              icon={item.icon}
              active={index === activeItem}
            />
          </Link>
        ))
      }
    </div>
  );
};

export default Sidebar;
