// src/components/Search.jsx

import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = ({ onResults }) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const results = await searchUsers({
        query,
        location,
        minRepos: parseInt(minRepos, 10) || 0,
      });

      onResults(results);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col gap-4 p-4">
      <input
        type="text"
        placeholder="Search username..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Location (e.g., Egypt)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Minimum public repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
