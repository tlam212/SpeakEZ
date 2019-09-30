import React from 'react'


const VenueInfo= ({venue}) => {
  console.log(venue)

    return  venue ? (
      <div className="card" >
      <img src={venue.img} class="card-img-top" alt={venue.name}/>
        <div class="card-body">
        <h5 class="card-title">{venue.name}</h5>
        <p>{venue.address1}</p>
        <p>{venue.address2}</p>
        <p className="card-text">{venue.description}</p>
        </div>
      </div>
    ) : null
}
export default VenueInfo
