import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId, postComment } from "../api";
import { Comment } from "./Comment";

export function CommentsContainer() {
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody] = useState("");
  const [isFailedPost, SetIsFailedPost] = useState(false);
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
    setCommentBody("");
    setIsSubmitting(true);
    postComment(article_id, newComment)
      .then(() => {
        const updatedComments = [newComment, ...comments].sort((a, b) => {
          const timeA = new Date(a.created_at).getTime();
          const timeB = new Date(b.created_at).getTime();
          if (timeA > timeB) {
            return -1;
          }
          if (timeA < timeB) {
            return 1;
          }
        });
        setComments(updatedComments);
        setIsSubmitting(false);
      })
      .catch(() => {
        SetIsFailedPost(true);
      });
  }

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((comments) => {
        comments.sort((a, b) => {
          const timeA = new Date(a.created_at).getTime();
          const timeB = new Date(b.created_at).getTime();
          if (timeA > timeB) {
            return -1;
          }
          if (timeA < timeB) {
            return 1;
          }
        });
        setComments(comments);
      })
      .catch((err) => {
        console.log(err, "<----getCommentsByArticleId fail");
      });
  }, [comments]);

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
          isFailedPost ? (
            <p>post failed</p>
          ) : (
            <p>posting comment...</p>
          )
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
            comments={comments}
            setComments={setComments}
          />
        );
      })}
    </div>
  );
}
