import { useState } from "react";
import { updateVotes } from "../api";
export function Article({ article, article_id }) {
  const [votes, setVotes] = useState(article.votes);
  function HandleVote(num) {
    updateVotes(article_id, num);
    setVotes(votes + num);
  }

  return (
    <>
      <div className="solo-article-container">
        <h1> {article.title}</h1>
        <h2>by {article.author}</h2>
        <img className="solo-article-img" src={article.article_img_url}></img>
        <article className="solo-article-body">{article.body}</article>
        <p className="solo-article-votes">Votes: {votes}</p>
      </div>
      <form>
        <button
          type="button"
          onClick={(e) => {
            HandleVote(1);
          }}
        >
          upVote
        </button>
        <button
          type="button"
          onClick={(e) => {
            HandleVote(-1);
          }}
        >
          downVote
        </button>
      </form>
    </>
  );
}
