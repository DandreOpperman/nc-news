import { Display } from "./Display";
export function Home({ articleTopic, setArticleTopic }) {
  return (
    <>
      <Display articleTopic={articleTopic} setArticleTopic={setArticleTopic} />
    </>
  );
}
