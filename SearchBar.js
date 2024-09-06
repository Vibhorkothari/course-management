import React from 'react';
import './SearchBar.css'; // Make sure to create this CSS file for styling

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search courses..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
