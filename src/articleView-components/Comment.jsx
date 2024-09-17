import { useEffect, useState } from "react";
import { getUsers } from "../api";
export function Comment({ comment }) {
  const username = comment.author;
  const [userAvatar, setUserAvatar] = useState("");
  useEffect(() => {
    getUsers().then((users) => {
      users.forEach((user) => {
        if (user.username === username) {
          setUserAvatar(user.avatar_url);
        }
      });
    });
  });
  return (
    <div className="comment">
      <img className="comment-user" src={userAvatar} />
      <div className="comment-user">user: {username}</div>
      <div className="comment-body">comment: {comment.body}</div>
    </div>
  );
}
