export function NavBar({ setArticleTopic }) {
  function handleClick(e, topic) {
    e.preventDefault();
    setArticleTopic(topic);
  }

  return (
    <form>
      <button
        type="button"
        className="upper-buttons"
        onClick={(e) => {
          handleClick(e, "coding");
        }}
      >
        Coding
      </button>
      <button
        type="button"
        className="upper-buttons"
        onClick={(e) => {
          handleClick(e, "football");
        }}
      >
        Football
      </button>
      <button
        type="button"
        className="upper-buttons"
        onClick={(e) => {
          handleClick(e, "cooking");
        }}
      >
        Cooking
      </button>
      <br></br>
      <button
        type="button"
        className="lower-buttons"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Sort by...
      </button>
      <button
        type="button"
        className="lower-buttons"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Order
      </button>
    </form>
  );
}
