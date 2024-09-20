import { useSearchParams, useParams } from "react-router-dom";
export function NavBar({ setArticleTopic, setSortBy, setOrderBy }) {
  let [searchParams, setSearchParams] = useSearchParams("");

  function handleClick(e, topic) {
    e.preventDefault();
    setArticleTopic(topic);
    setSearchParams({ topic });
  }
  function handleSortByChange(e) {
    switch (e.target.value) {
      case "date":
        setSortBy("created_at");
        setSearchParams({ sort_by: "created_at" });
        break;
      case "comment count":
        setSortBy("comment_count");
        setSearchParams({ sort_by: "comment_count" });
        break;
      case "votes":
        setSortBy("votes");
        setSearchParams({ sort_by: "votes" });
    }
  }
  function handleOrderByChange(e) {
    switch (e.target.value) {
      case "ascending":
        setOrderBy("asc");
        setSearchParams({ order: "ascending" });
        break;
      case "descending":
        setOrderBy("desc");
        setSearchParams({ order: "descending" });
    }
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
      <select
        id="sortBy"
        className="lower-buttons"
        onChange={(e) => {
          handleSortByChange(e);
        }}
      >
        <option value="">-select a category to sort by--</option>
        <option value="date">date</option>
        <option value="comment count">comment count</option>
        <option value="votes">votes</option>
      </select>
      <select
        className="lower-buttons"
        onChange={(e) => {
          handleOrderByChange(e);
        }}
        id="orderBy"
      >
        <option value="">-order of display--</option>
        <option value="ascending">ascending </option>
        <option value="descending">descending</option>
      </select>
    </form>
  );
}
