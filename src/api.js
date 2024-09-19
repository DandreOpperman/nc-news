import axios from "axios";
const ncNews = axios.create({
  baseURL: "https://news-api-ovyc.onrender.com/api",
});

export function getArticles() {
  return ncNews.get("/articles").then(({ data }) => {
    return data.articles;
  });
}

export function getArticlesById(article_id) {
  return ncNews.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}

export function getCommentsByArticleId(article_id) {
  return ncNews.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

export function getUsers() {
  return ncNews.get("/users").then(({ data }) => {
    return data.users;
  });
}

export function updateVotes(article_id, num) {
  const patchBody = {
    inc_votes: num,
  };
  return ncNews.patch(`/articles/${article_id}`, patchBody).then(({ data }) => {
    return data.article;
  });
}

export function postComment(article_id, newComment) {
  const postBody = {
    username: newComment.username,
    body: newComment.body,
  };
  if (newComment.body.length > 0)
    return ncNews
      .post(`/articles/${article_id}/comments`, postBody)
      .then(({ data }) => {
        return data;
      });
}
