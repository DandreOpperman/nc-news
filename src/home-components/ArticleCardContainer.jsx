import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router-dom";
import { ArticleContainer } from "../articleView-components/ArticleContainer";
export function ArticleCardContainer({
  articleTopic,
  setArticleTopic,
  sortBy,
  setSortBy,
  orderBy,
  setOrderBy,
}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [isError, SetIsError] = useState(false);
  useEffect(() => {
    SetIsLoading(true);
    SetIsError(false);
    getArticles(articleTopic, sortBy, orderBy)
      .then((articles) => {
        setArticles(articles);
        SetIsLoading(false);
        SetIsError(false);
      })
      .catch((err) => {
        SetIsLoading(false);
        SetIsError(true);
        setArticleTopic("");
        console.log(err, "<OO");
      });
  }, [articleTopic, sortBy, orderBy]);

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
    return (
      <p className="Article-card-container">
        Something went wrong, you may want to check your internet connection 🤔
      </p>
    );
  }
  return (
    <div className="Article-card-container">
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </div>
  );
}
