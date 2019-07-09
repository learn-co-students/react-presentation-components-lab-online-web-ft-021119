import React from 'react'

// handleClick = () => {
//    console.log("This is my permanent mood!")
// }

const SimplerComponent = (props) => {
   return <div onClick={props.handleClick}>I am just happy.</div>
}

export default SimplerComponent
