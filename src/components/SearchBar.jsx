import React, { useState } from 'react';

const SearchBar = ({ onSearch, onClear }) => {
  const [searchString, setSearchString] = useState("");

  const handleSearch = () => {
    onSearch(searchString);
  };

  const handleClear = () => {
    setSearchString("");
    onClear();
  };

  return (
    <div style={{ margin: "10px" }}>
      <input
        type="text"
        id="search-string"
        placeholder="Enter your search"
        style={{ marginRight: "10px" }}
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button className="search" style={{ marginRight: "10px" }} onClick={handleSearch}>
        Search
      </button>
      {/* <button className="clear" onClick={handleClear}>
        Clear Results
      </button> */}
    </div>
  );
};

export default SearchBar;