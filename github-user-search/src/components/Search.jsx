import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError('Looks like we cant find the user');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="bg-white p-4 rounded shadow">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <h2 className="text-xl font-semibold">{user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;