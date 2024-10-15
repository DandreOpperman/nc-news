import { Link } from "react-router-dom";
export function ArticleCard({ article }) {
  return (
    <div className="card">
      <Link
        key={article.article_id}
        to={`/article/${article.article_id}`}
        element={<ArticleCard />}
      >
        <h2 className="card-title">{article.title}</h2>
      </Link>
      <img className="card-img" src={article.article_img_url} />
      <div className="card-info">
        <p className="card-votes">votes: {article.votes}</p>
        <p className="card-comments">comments: {article.comment_count}</p>
      </div>
    </div>
  );
}
