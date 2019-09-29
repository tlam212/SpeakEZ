import React from 'react'

const VenueCard = (props) => {
  return(
    <div className="card-body" >
            <h5>{props.venue.name}</h5>
            <p>{props.venue.address1}</p>
            <p>{props.venue.address2}</p>
            <button data-id={props.venue.id} onClick={props.whenClicked}>see more...</button>
          </div>
  )
}
export default VenueCard
