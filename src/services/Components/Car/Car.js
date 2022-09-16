import React from 'react';
import './Character.css';

export default function Character(body, wheels, decal) {
  return (
    <div className="character">
      <img className="body" src={`${process.env.PUBLIC_URL}/images/${body}.png`} />
      <img className="wheels" src={`${process.env.PUBLIC_URL}/images/${wheels}.png`} />
      <img className="decal" src={`${process.env.PUBLIC_URL}/images/${decal}.png`} />
    </div>
  );
}