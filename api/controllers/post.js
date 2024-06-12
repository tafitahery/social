const { db } = require("../connect");
const jwt = require("jsonwebtoken");

exports.getPosts = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON p.userId = u.id 
  LEFT JOIN relationships AS r ON p.userId = r.followedUserId WHERE r.followerUserId = ? OR p.userId = ?
  ORDER BY p.createdAt DESC`;
    db.query(q, [userInfo.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

exports.getPost = (req, res, next) => {
  // TO DO
};
