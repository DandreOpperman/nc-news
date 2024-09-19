import { ArticleCardContainer } from "./home-components/ArticleCardContainer";
import { NavBar } from "./home-components/NavBar";

export function Display({ articleTopic, setArticleTopic }) {
  return (
    <>
      <NavBar setArticleTopic={setArticleTopic} />
      <ArticleCardContainer
        articleTopic={articleTopic}
        setArticleTopic={setArticleTopic}
      />
    </>
  );
}
