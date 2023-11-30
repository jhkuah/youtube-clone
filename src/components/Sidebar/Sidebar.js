import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdExitToApp,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth.action";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, toggleSidebarHandler }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logout(dispatch);
    navigate("/login");
  };
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => toggleSidebarHandler(false)}
    >
      <Link to="/">
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>
      <Link to="/likes">
        <li>
          <MdThumbUp size={23} />
          <span>Liked Videos</span>
        </li>
      </Link>

      <li className="disabled">
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>

      <li className="disabled">
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li className="disabled">
        <MdLibraryBooks size={23} />
        <span>Comments</span>
      </li>

      <hr />
      <li onClick={logoutHandler} className="mt-auto">
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
    </nav>
  );
};

export default Sidebar;
