import React from 'react';

const Card = (props) => {
    return (
        <React.Fragment>
        <div className='card'>
            <h2>{props.title}</h2>
            <p>{props.age}</p>
        </div>
        </React.Fragment>
    )
  }
  
  export default Card