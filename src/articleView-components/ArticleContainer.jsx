import { useParams } from "react-router-dom";
import { getArticlesById } from "../api";
import { useEffect, useState } from "react";
import { Article } from "./Article";
import { CommentsContainer } from "./CommentsContainer";
export function ArticleContainer() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [isError, SetIsError] = useState(false);
  useEffect(() => {
    SetIsLoading(true);
    SetIsError(false);
    getArticlesById(article_id)
      .then((article) => {
        setArticle(article);
        SetIsLoading(false);
        SetIsError(false);
      })
      .catch((err) => {
        SetIsLoading(false);
        SetIsError(true);
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <img
        className="loader"
        src="../public/Spinner@1x-1.0s-200px-200px.gif"
        alt="a loading animation that shows bubbles forming from the inside of a circle, soreading out and then popping when the reach the edge of the circle"
      />
    );
  }

  if (isError) {
    return <p>something went wrong</p>;
  }

  return (
    <div>
      <Article article={article} />
      <CommentsContainer article={article} />
    </div>
  );
}
