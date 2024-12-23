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
        className="w-28 transition-all duration-300 rounded-full bg-yellow-100 px-4 py-2 placeholder:text-stone-400 focus:w-72 focus:outline-none focus:rign focus:ring-yellow-500 focus:rign-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
