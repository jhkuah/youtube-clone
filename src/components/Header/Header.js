import React from 'react';
import "./_header.scss";
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications, MdApps} from "react-icons/md"

const Header = ({toggleSidebarHandler}) => {
  return (
    <div className="header">
      <FaBars className="header__menu" size={26} 
        onClick={toggleSidebarHandler}      
      />
      <img
        src="https://www.freepnglogos.com/uploads/youtube-vector-logo-png-9.png"
        alt=""
        className="header__logo"
      />
      <form>
        <input type="text" placeholder="Seach" />
        <button type="submit">
          <AiOutlineSearch size={25} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={30} />
        <MdApps size={30} />
        <img
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header