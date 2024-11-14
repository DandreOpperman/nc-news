import { useEffect, useState } from "react";
import { deleteComment, getUsers } from "../api";
export function Comment({ comment, comments, setComments, setIsDeleting }) {
  const username = comment.author;
  const isLoggedInUser = comment.author === "weegembump";
  const [userAvatar, setUserAvatar] = useState("");
  const [isLoading, SetIsLoading] = useState(false);
  const [isFailedDelete, SetIsFailedDelete] = useState(false);
  useEffect(() => {
    getUsers().then((users) => {
      SetIsLoading(true);
      users.forEach((user) => {
        if (user.username === username) {
          setUserAvatar(user.avatar_url);
        }
      });
      SetIsLoading(false);
    });
  }, []);

  function handleClick(e) {
    e.preventDefault();
    const updatedArr = [];
    const id = comment.comment_id;
    setIsDeleting(true);
    deleteComment(id)
      .then(() => {
        setIsDeleting(false);
        comments.forEach((com) => {
          if (!com.comment_id === comment.comment_id) {
            updatedArr.push(com);
          }
        });
        setComments(updatedArr);
      })
      .catch(() => {
        SetIsFailedDelete(true);
        setIsDeleting(false);
      });
  }

  if (isLoading) {
    return (
      <img
        className="loader"
        src="/Spinner@1x-1.0s-200px-200px.gif"
        alt="a loading animation that shows bubbles forming from the inside of a circle, soreading out and then popping when the reach the edge of the circle"
      />
    );
  }

  return (
    <div className="comment">
      <div className="user-info">
        <img className="comment-user-avatar" src={userAvatar} />
        <div className="comment-user">{username}</div>
      </div>
      {isFailedDelete ? (
        <p className="comment-body">failed to delete comment</p>
      ) : null}
      <div className="comment-body">{comment.body}</div>
      <form
        className="comment-box"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <p>{isLoggedInUser ? <button type="button">X</button> : null}</p>
      </form>
    </div>
  );
}
