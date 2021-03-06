import React, { useEffect } from "react";
import "./Layout.css";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Routes from "../Routes";
import TopNav from "../topnav/TopNav";
import { useSelector, useDispatch } from 'react-redux';
import ThemeActions from '../../redux/actions/ThemeActions';

const Layout = () => {

  const themeReducer = useSelector(state => state.ThemeReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');
    const colorClass = localStorage.getItem('colorMode', 'theme-color-blue');

    dispatch(ThemeActions.setMode(themeClass));
    dispatch(ThemeActions.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar {...props} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
