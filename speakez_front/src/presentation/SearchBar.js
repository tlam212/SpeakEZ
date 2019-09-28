import React from 'react'

const SearchBar = () => {
  return(
    <div className="ui icon input">
        <input type="text" placeholder="Search..."  name="searchInput" id="searchInput"/>
        <i aria-hidden="true" className="search icon"></i>
      </div>
  )
}
export default SearchBar
