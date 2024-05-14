import { Link } from "react-router-dom";
import "./post.scss";
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  TextsmsOutlined,
  ShareOutlined,
  MoreHoriz,
} from "@mui/icons-material";

export default function Post({ post }) {
  // TEMPORARY
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHoriz />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            12 likes
          </div>
          <div className="item">
            <TextsmsOutlined />
            12 comments
          </div>
          <div className="item">
            <ShareOutlined />
            Share
          </div>
        </div>
      </div>
    </div>
  );
}
