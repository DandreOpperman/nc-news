import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
export function ArticleCardContainer({ articleTopic }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles);
        console.log(articles);
      })
      .catch((err) => console.log(err));
  }, [getArticles]);
  return (
    <div className="Article-card-container">
      <ArticleCard articles={articles} />
    </div>
  );
}
