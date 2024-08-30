import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query || query === "") return;

    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search an order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}
