import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    if (!query) {
      return;
    }
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search order number..."
        value={query}
      ></input>
    </form>
  );
}
