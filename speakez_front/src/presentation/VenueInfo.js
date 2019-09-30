import React from 'react'


const VenueInfo= ({venue}) => {
  console.log(venue)

    return  (
      <div className="ui card" >

          <img src={venue.img} className="ui medium centered image" alt={venue.name}/>
          <h2>{venue.name}</h2>
          <p> {venue.address1}</p>
          <p> {venue.address2}</p>
          <p>{venue.description}</p>
      </div>
    )
}
export default VenueInfo
