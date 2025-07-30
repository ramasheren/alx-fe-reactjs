import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="p-2 border rounded"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}

      {userData && (
        <div className="user-card p-4 border rounded shadow">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full"
          />
          <h2 className="text-xl font-bold">{userData.name || userData.login}</h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
