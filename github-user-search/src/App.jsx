import React from 'react';
import Search from './components/Search';
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search />
    </div>
  );
}