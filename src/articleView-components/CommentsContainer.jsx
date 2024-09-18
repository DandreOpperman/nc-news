import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId, postComment } from "../api";
import { Comment } from "./Comment";

export function CommentsContainer({ article }) {
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { article_id } = useParams();

  function handleInputChange(e) {
    setCommentBody(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (commentBody.length < 1) {
      return <p>required comment length not met</p>;
    }
    const newComment = { username: "weegembump", body: commentBody };
    setIsSubmitting(true);
    setCommentBody("");
    postComment(article_id, newComment).then(() => {
      setComments([newComment, ...comments]);
      setIsSubmitting(false);
    });
  }

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        console.log(err, "<----getCommentsByArticleId fail");
      });
  }, [comments, article_id]);
  return (
    <div className="comments">
      <h1>Comments</h1>
      <form
        className="comment-box"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label className="comment-input-label" htmlFor="comment-box">
          Leave a comment
        </label>
        {isSubmitting ? (
          <p>posting comment...</p>
        ) : (
          <textarea
            id="comment-box"
            className="comment-input-box"
            onChange={(e) => {
              handleInputChange(e);
            }}
            value={commentBody}
          ></textarea>
        )}
        <button
          disabled={isSubmitting}
          className="comment-submit"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </form>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.comment_id ? comment.comment_id : comment.length * 79}
            comment={comment}
          />
        );
      })}
    </div>
  );
}
