// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = (props) => {
    const handleClick = () => {
        // event.preventDefault();
        alert(`Hi! Are you happy, too?`)
    };

    return (
    <div  onClick={props.handleClick}>
    <p>
        I am just happy
    </p>  
    </div>
    );
};

export default SimplerComponent;