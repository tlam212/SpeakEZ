import React from 'react'

const VenueCard = (props) => {
  return(
    <div className="card-body" >
            <h5>{props.name}</h5>
            <p>{props.address1}</p>
            <p>{props.address2}</p>
            <button>see more...</button>
          </div>
  )
}
export default VenueCard
