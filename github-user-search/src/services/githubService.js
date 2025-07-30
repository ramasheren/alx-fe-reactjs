// src/services/githubService.js

// Advanced GitHub API integration

/**
 * Search GitHub users by query.
 * This uses the full API URL as required: "https://api.github.com/search/users?q"
 */
export const searchUsers = async (query) => {
  try {
    const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
};

/**
 * Get full user profile by username.
 */
export const getUserDetails = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    throw error;
  }
};

/**
 * Get public repositories for a user.
 */
export const getUserRepos = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user repositories:", error.message);
    throw error;
  }
};
