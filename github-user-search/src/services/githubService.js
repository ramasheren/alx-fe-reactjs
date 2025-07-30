import axios from 'axios';

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    ...(apiKey && { Authorization: `token ${apiKey}` }),
  },
});

// Advanced user search using query parameters
export const searchUsers = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await githubAPI.get(`/search/users`, {
    params: { q: query.trim() },
  });

  return response.data;
};
