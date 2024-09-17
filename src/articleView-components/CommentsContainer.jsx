import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../api";
import { Comment } from "./Comment";

export function CommentsContainer({ article }) {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="comments">
      {comments.map((comment) => {
        return <Comment key={comment.comment_id} comment={comment} />;
      })}
    </div>
  );
}
