export function Header({ setArticleTopic }) {
  function handleClick(e) {
    setArticleTopic("");
  }
  return (
    <header
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <h1 className="main-title">NC-News</h1>
    </header>
  );
}
