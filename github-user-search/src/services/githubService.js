import axios from 'axios';

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    ...(apiKey && { Authorization: `token ${apiKey}` }),
  },
});

// Single user fetch by username
export const fetchUserData = async (username) => {
  const response = await githubAPI.get(`/users/${username}`);
  return response.data;
};
