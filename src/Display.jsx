import { ArticleCardContainer } from "./home-components/ArticleCardContainer";
import { NavBar } from "./home-components/NavBar";

export function Display({
  articleTopic,
  setArticleTopic,
  sortBy,
  setSortBy,
  orderBy,
  setOrderBy,
}) {
  return (
    <>
      <NavBar
        setArticleTopic={setArticleTopic}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
      />
      <ArticleCardContainer
        articleTopic={articleTopic}
        setArticleTopic={setArticleTopic}
        sortBy={sortBy}
        setSortBy={setSortBy}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
    </>
  );
}
