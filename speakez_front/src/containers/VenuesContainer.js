import React from 'react'
import VenueCard from '../presentation/VenueCard'
import SearchBar from '../presentation/SearchBar'
import MapContainer from '../containers/MapContainer'



const VenuesContainer = ({handleSearchChange, searchValue, venues}) => {

  let searchedVenues = venues.filter((venue) => venue.address2.includes(searchValue))


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
