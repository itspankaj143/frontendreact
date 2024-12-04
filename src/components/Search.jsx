import React from "react";

const Search = ({ onSearchChange, onCategoryChange }) => {
  return (
    <>
      <form action="" className="search-form">
        <input
          type="search"
          placeholder="Search for products..."
          onChange={(e) => onSearchChange(e.target.value)}
          name="search"
          id="searchInput"
          className="search-input"
        />
        <select
          name="category"
          id="categorySelect"
          onChange={(e) => onCategoryChange(e.target.value)}
          className="category-select"
        >
          <option value="">Filter by Category</option>
          <option value="all">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </form>
    </>
  );
};

export default Search;
