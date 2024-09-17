export function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment">user: {comment.author}</div>
      <div>comment: {comment.body}</div>
    </div>
  );
}
