import React from 'react';

const Card = ({props}) => {
    const { image, name, price } = props.one;

  return (
    <div>
      <div className="card">
        <img className="image" src={image} alt={name} />
        <h3>{name}</h3>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
