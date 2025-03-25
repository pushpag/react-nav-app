import React, { useState } from "react";
import "./Sidebar.css";
import { ISidebarProps } from '../../interfaces/sidebar-props';
import { Link } from "react-router-dom";

const Sidebar: React.FC<ISidebarProps> = ({ isHovered, onToggleChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  // Handle hover and leave events
  const handleMouseEnter = () => {
    onToggleChange(!isHovered);
  };

  const handleMouseLeave = () => {
    onToggleChange(!isHovered);
  };
  return (
    <div
      id="sidebar-wrapper"
      className="customNav"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
        <li style={{ margin: "10px 0 20px 0", background: "#fff" }}>
          <Link to="/home">
            <span>
              { !isHovered ? (
                <img
                  src="/img/logo_icon.png"
                  title="Wellzio"
                  className="logoicon"
                  style={{
                    width: "32px",
                    height: "28px",
                    left: "-5px",
                    position: "relative",
                  }}
                />
              ) : (
                <img
                  src="/img/Logo_new.png"
                  title="Wellzio"
                  className="logoimg"
                  style={{
                    width: "130px",
                    height: "28px",
                    left: "-5px",
                    position: "relative",
                  }}
                />
              )}
            </span>
          </Link>
        </li>
        <li className="active">
          <Link to="/home">
            <span className="nav-icon pull-left">
              <img src="/img/shape1.png" alt="Home" />
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/schedule">
            <span className="nav-icon pull-left">
              <img
                src="/img/schedule1.png"
                alt="Schedule"
                style={{ width: "20px", marginRight: "1px" }}
              />
            </span>
            Schedule
          </Link>
        </li>
        <li>
          <Link to="/patients">
            <span className="nav-icon pull-left">
              <img src="/img/patient1.png" alt="Patients" />
            </span>
            Patients
          </Link>
        </li>
        <li>
          <Link to="/billing">
            <span className="nav-icon pull-left">
              <img src="/img/billing1.png" alt="Billing" />
            </span>
            Billing
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <span className="nav-icon pull-left">
              <img src="/img/reports1.png" alt="Reports" />
            </span>
            Reports
          </Link>
        </li>
        <li>
          <Link to="#">
            <span className="nav-icon pull-left">
              <img src="/img/econsult1.png" alt="eConsult" />
            </span>
            eConsult
          </Link>
        </li>
      </ul>
      <ul className="sidebar-nav nav-bottom nav-pills nav-stacked" id="menu" style={{ position: isDropdownOpen ? 'fixed' : 'absolute' }}>
        <li>
          <Link to="#">
            <span className="nav-icon pull-left">
              <img src="/img/settings1.png" alt="Settings" />
            </span>
            Settings
          </Link>
        </li>
        <li>
          <Link to="#">
            <span className="nav-icon pull-left">
              <img
                src="/img/alerts1.png"
                alt="Help"
                style={{ width: "18px", marginLeft: "3px" }}
              />
            </span>
            Help
          </Link>
        </li>
        <li className="dropdown dropdownnav_wrap">
          <a
            className="open_profile dropdown-toggle"
            data-toggle="dropdown"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span title="" className="nav-icon pull-left">
              <img src="/img/MenuFilled.png" alt="Menu" />
            </span>
            <span className="nme login_usr_name" title="">
              Pushpalatha
            </span>
          </a>
          <ul className="dropdown-menu" style={{ display: isDropdownOpen ? 'block' : 'none' }}>
            <li>
              <Link to="#">
                <span>Pushpalatha Gowda</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>wzd11@wellzio.com</span>
              </Link>
            </li>
            <li style={{ borderBottom: "solid 1px #ddd" }}>
              <Link
                to=""
                className="set_nav"
                title="Profile"
                style={{ padding: "10px 0" }}
              >
                <span>
                  <img
                    src="/img/user-settings.png"
                    style={{ marginLeft: "18px" }}
                    alt="Profile"
                  />
                </span>
                <span style={{ marginLeft: "17px" }}>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="SignedOut.action" title="Logout">
                <span style={{ paddingRight: "16px", marginLeft: "-4px" }}>
                  <img src="/img/LogoutFilled.png" alt="Logout" />
                </span>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
