import React from 'react';
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdExitToApp,
} from "react-icons/md"

const Sidebar = ({sidebar, toggleSidebarHandler}) => {
  return (
    <nav className={sidebar? "sidebar open" : "sidebar"} onClick={()=> toggleSidebarHandler(false)}>
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>

      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <span>Comments</span>
      </li>

      <hr />
      <li>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
}

export default Sidebar