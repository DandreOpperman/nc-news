import { ArticleCardContainer } from "./home-components/ArticleCardContainer";
import { NavBar } from "./home-components/NavBar";
import { useState } from "react";

export function Display() {
  const [articleTopic, setArticleTopic] = useState("");
  return (
    <>
      <NavBar setArticleTopic={setArticleTopic} />
      <ArticleCardContainer articleTopic={articleTopic} />
    </>
  );
}
