import React from 'react'


const VenueInfo= (props) => {
    return props.venue ? (
      <div className="ui segment" >
          <img src={props.venue.img} className="ui medium centered image" alt={props.venue.name}></img>
          <h2>{props.venue.name}</h2>
          <p> {props.venue.address1}</p>
          <p> {props.venue.address2}</p>
          <p>{props.venue.description}</p>
      </div>
    ) : null

}
export default VenueInfo
