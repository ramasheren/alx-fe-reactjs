// src/services/githubService.js

const BASE_URL = "https://api.github.com";

export const searchUsers = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.items; // returns an array of users
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    throw error;
  }
};

export const getUserRepos = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/repos`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user repositories:", error.message);
    throw error;
  }
};
