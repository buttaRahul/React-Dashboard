import "./navbar.scss";
import { FcSearch } from "react-icons/fc";
import { RiApps2Fill } from "react-icons/ri";
import { GiExpand } from "react-icons/gi";
import { FcSettings } from "react-icons/fc";
import { MdNotificationsActive } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg"></img>
        <span>admin</span>
      </div>
      <div className="icons">
        {/* <FcSearch /> */}
        {/* <RiApps2Fill /> */}
        {/* <GiExpand /> */}
        <img src="/search.svg"></img>
        <img src="/app.svg"></img>
        <img src="/expand.svg"></img>
        <div className="notification">
          {/* <MdNotificationsActive /> */}
          <img src="/notifications.svg"/>
          <span>1</span>
        </div>
        <div className="user">
          {/* <FaUserTie/> */}
          <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"></img>
          <span>Rahul</span>
        </div>
        {/* <FcSettings /> */}
        <img src="/settings.svg"></img>
      </div>
    </div>
  );
};

export default Navbar;
