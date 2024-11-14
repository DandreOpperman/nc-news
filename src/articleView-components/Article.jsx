import { useState } from "react";
import { updateVotes } from "../api";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
export function Article({ article, article_id }) {
  const [votes, setVotes] = useState(article.votes);
  const [isError, SetIsError] = useState(false);

  function HandleVote(e, num) {
    e.preventDefault();
    updateVotes(article_id, num)
      .then(() => {
        setVotes(votes + num);
      })
      .catch(() => {
        SetIsError(true);
        console.log("error in updateVotes");
      });
  }

  return (
    <section>
      <div className="solo-article-container">
        <h1 className="solo-article-title"> {article.title}</h1>
        <h2 className="solo-article-title">by {article.author}</h2>
        <img className="solo-article-img" src={article.article_img_url}></img>
        <article className="solo-article-body">{article.body}</article>
        <p className="solo-article-votes">Votes: {votes}</p>
        <form className="solo-article-buttons">
          <button
            type="button"
            onClick={(e) => {
              HandleVote(e, 1);
            }}
          >
            <FaThumbsUp className="icon" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              HandleVote(e, -1);
            }}
          >
            <FaThumbsDown className="icon" />
          </button>
        </form>
      </div>
      <p>
        {isError ? <p>vote unsuccessful, check internet connection</p> : null}
      </p>
    </section>
  );
}
