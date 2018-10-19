import React from 'react'

function House(props) {
  console.log('house comp', props)
  return (
    <div>
       Name: {props.house.name}
       <br/>
       Address: {props.house.address}
       <br/>
       City: {props.house.city}
       <br/>
       State: {props.house.state}
       <br/>
       zipcode: {props.house.zipcode}
       <br/>
       <button onClick={() => props.delete(props.id)}>Delete</button>
       <br/><br/><br/><br/>
    </div>
  )
}

export default House;
