import React from 'react';
import './Car.css';

export default function Character({ body, wheels, decal }) {
  return (
    <div className="character">
      <img className="body" src={`${process.env.PUBLIC_URL}/Rocket-League/${body}.png`} />
      <img className="wheels" src={`${process.env.PUBLIC_URL}/Rocket-League/${wheels}.png`} />
      <img className="decal" src={`${process.env.PUBLIC_URL}/Rocket-League/${decal}.png`} />
    </div>
  );
}