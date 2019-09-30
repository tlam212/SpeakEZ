import React from 'react'
import {Link} from 'react-router-dom'

const VenueCard = (props) => {
  return(
    <Link to={`/venues/${props.venue.id}`} >
        <div className="card-body" >
          <h5>{props.venue.name}</h5>
          <p>{props.venue.address1}</p>
          <p>{props.venue.address2}</p>
        </div>
    </Link>
  )
}
export default VenueCard
