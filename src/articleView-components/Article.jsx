import { useState } from "react";
export function Article({ article }) {
  // const [articleBody, setArticleBody]=useState('')

  return (
    <>
      <div className="solo-article-container">
        <h1> {article.title}</h1>
        <h2>by {article.author}</h2>
        <img className="solo-article-img" src={article.article_img_url}></img>
        <article className="solo-article-body">{article.body}</article>
        <p className="solo-article-votes">Votes: {article.votes}</p>
      </div>
      <form>
        <button>upVote</button>
        <button>downVote</button>
      </form>
    </>
  );
}
