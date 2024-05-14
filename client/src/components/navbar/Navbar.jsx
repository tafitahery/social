import "./navbar.scss";
import {
  HomeOutlined,
  DarkModeOutlined,
  WbSunnyOutlined,
  GridViewOutlined,
  NotificationsOutlined,
  EmailOutlined,
  PersonOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

export default function Navbar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Lebosocial</span>
        </Link>
        <HomeOutlined />
        <div onClick={toggle}>
          {!darkMode ? <DarkModeOutlined /> : <WbSunnyOutlined />}
        </div>
        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}
