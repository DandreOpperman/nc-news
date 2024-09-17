import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Link } from "react-router-dom";
import { ArticleContainer } from "./articleView-components/ArticleContainer";

export function App() {
  return (
    <>
      <Link to="/">
        <Header />
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<ArticleContainer />} />
      </Routes>
    </>
  );
}
