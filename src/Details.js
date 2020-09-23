import React from 'react';

function Details(props) {
  const location = props.location
  const followers = props.followers
  return(
    <div className="details">
      <label>Location: 
      <p>{location}</p>
      </label>
      <label>Followers number: 
      <p>{followers}</p>
      </label>
    </div>
  )
}
export default Details;