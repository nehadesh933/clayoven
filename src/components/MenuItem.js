import React from 'react';

export default function MenuItem({ image, name, description, price }) {
  return (
    <div className="menuItem">
      <div className="menuItemImage" style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p><b>₹{price}</b></p>
    </div>
  );
}
