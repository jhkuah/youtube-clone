import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useNavigate } from "react-router";

const Header = ({ toggleSidebarHandler }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  const profile = JSON.parse(sessionStorage.getItem("ytc-user"));
  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={toggleSidebarHandler}
      />
      <img
        src="https://www.freepnglogos.com/uploads/youtube-vector-logo-png-9.png"
        alt=""
        className="header__logo"
      />
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="Seach"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={25} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={30} />
        <MdApps size={30} />
        <img src={profile?.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Header;
