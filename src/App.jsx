import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Link } from "react-router-dom";
import { ArticleContainer } from "./articleView-components/ArticleContainer";
import { useState } from "react";

export function App() {
  const [articleTopic, setArticleTopic] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");
  return (
    <>
      <Link to="/">
        <Header articleTopic={articleTopic} setArticleTopic={setArticleTopic} />
      </Link>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setArticleTopic={setArticleTopic}
              articleTopic={articleTopic}
              sortBy={sortBy}
              setSortBy={setSortBy}
              orderBy={orderBy}
              setOrderBy={setOrderBy}
            />
          }
        />
        <Route path="/article/:article_id" element={<ArticleContainer />} />
      </Routes>
    </>
  );
}
