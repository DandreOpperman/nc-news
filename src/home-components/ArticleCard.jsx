import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
export function ArticleCard({ article }) {
  return (
    <div className="card">
      <Link
        key={article.article_id}
        to={`/article/${article.article_id}`}
        style={{ textDecoration: "none" }}
        element={<ArticleCard />}
      >
        <h2 className="card-title">{article.title}</h2>
        <img className="card-img" src={article.article_img_url} />
        <div className="card-info">
          <p className="card-votes">
            <FaThumbsUp className="icon" /> {article.votes}
          </p>
          <p className="card-comments">
            <FaComments className="icon" /> {article.comment_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
