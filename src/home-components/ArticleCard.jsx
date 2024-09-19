export function ArticleCard({ article }) {
  return (
    <div className="card">
      <h2 className="card-title">{article.title}</h2>
      <img className="card-img" src={article.article_img_url} />
      <p className="card-votes">Votes: {article.votes}</p>
    </div>
  );
}
