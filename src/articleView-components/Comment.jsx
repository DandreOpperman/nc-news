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
      <div className="left">
        <img className="comment-user-avatar" src={userAvatar} />
        <div className="comment-user">{username}</div>
      </div>
      <div className="comment-body">{comment.body}</div>
    </div>
  );
}
