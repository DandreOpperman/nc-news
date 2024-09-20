import { Display } from "./Display";
export function Home({
  articleTopic,
  setArticleTopic,
  sortBy,
  setSortBy,
  orderBy,
  setOrderBy,
}) {
  return (
    <>
      <Display
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
