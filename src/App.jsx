import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Link } from "react-router-dom";
import { ArticleContainer } from "./articleView-components/ArticleContainer";
import { useState } from "react";

export function App() {
  const [articleTopic, setArticleTopic] = useState("");
  return (
    <>
      <Link to="/">
        <Header setArticleTopic={setArticleTopic} />
      </Link>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setArticleTopic={setArticleTopic}
              articleTopic={articleTopic}
            />
          }
        />
        <Route path="/article/:article_id" element={<ArticleContainer />} />
      </Routes>
    </>
  );
}
