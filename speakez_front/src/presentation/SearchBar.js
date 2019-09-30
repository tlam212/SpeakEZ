import React from 'react'

const SearchBar = (props) => {
  return(
    <div className="ui icon input">
        <input value={props.searchValue} placeholder="Search..."  name="searchInput" id="searchInput"
        onChange={props.onChangeHandler}/>
        <i aria-hidden="true" className="search icon"></i>
      </div>
  )
}
export default SearchBar
