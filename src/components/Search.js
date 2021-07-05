import React from "react";

const Search = (props) => {
  const { setSearch } = props;

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <div className="header">
      <h1>EmojiSearch</h1>
      <input
        type="search"
        placeholder="Search emoji..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
