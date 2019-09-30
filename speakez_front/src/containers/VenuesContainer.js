import React from 'react'
import VenueCard from '../presentation/VenueCard'
import SearchBar from '../presentation/SearchBar'



const VenuesContainer = ({handleSearchChange, searchValue, venues}) => {

  let searchedVenues = venues.filter((venue) => venue.address2.includes(searchValue))
  console.log(searchedVenues)

    return(
      <div className="vcDiv">
        <SearchBar value={searchValue} onChangeHandler={handleSearchChange} />
        {
          searchedVenues.map(venue => <VenueCard
           key={venue.id}
           venue={venue}
           />)}
      </div>
    )
}
export default VenuesContainer
