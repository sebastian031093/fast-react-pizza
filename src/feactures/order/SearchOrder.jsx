import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("IIDSAT");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!query) return;

    navigate(`order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        onChange={event => setQuery(event.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
