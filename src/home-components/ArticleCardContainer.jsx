import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router-dom";
import { ArticleContainer } from "../articleView-components/ArticleContainer";
export function ArticleCardContainer({ articleTopic }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [isError, SetIsError] = useState(false);
  useEffect(() => {
    SetIsLoading(true);
    SetIsError(false);
    getArticles()
      .then((articles) => {
        setArticles(articles);
        SetIsLoading(false);
        SetIsError(false);
      })
      .catch((err) => {
        SetIsLoading(false);
        SetIsError(true);
        console.log(err);
      });
  }, [getArticles]);

  if (isLoading) {
    return (
      <img
        className="loader"
        src="Spinner@1x-1.0s-200px-200px.gif"
        alt="a loading animation that shows bubbles forming from the inside of a circle, soreading out and then popping when the reach the edge of the circle"
      />
    );
  }

  if (isError) {
    return <p>something went wrong</p>;
  }
  return (
    <div className="Article-card-container">
      {articles.map((article) => {
        return (
          <Link
            key={article.article_id}
            to={`/article/${article.article_id}`}
            element={<ArticleContainer />}
          >
            <ArticleCard article={article} />
          </Link>
        );
      })}
    </div>
  );
}
