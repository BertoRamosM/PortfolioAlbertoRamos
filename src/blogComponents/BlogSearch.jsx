import SearchIcon from "../icons/Search";
import React from "react";

const BlogSearch = ({setSearch, search}) => {

  const handleSearch = (e) => {
    let searchValue = e.target.value;
    setSearch(searchValue)
  };

  return (
    <form className="relative mt-4 flex ml-4" id="search-form">
      <label className="hidden" htmlFor="search-input">
        Search
      </label>
      <div className="relative">
        <input
          type="text"
          id="query"
          name="query"
          className="py-2 pl-10 w-[100%] sm:w-full pr-4 rounded-xl border-2 border-purple-400/20 bg-transparent text-white focus:outline-none"
          placeholder="Search by title"
          value={search}
          onChange={handleSearch}
        />
        <div className="absolute inset-y-0 left-3 flex items-center">
          <SearchIcon />
        </div>
      </div>
    </form>
  );
};

export default BlogSearch;
