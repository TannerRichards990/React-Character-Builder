import React from 'react';
import './Slogan.css';

export default function Slogan({ sloganArr }) {
  const slogans = sloganArr.map((slogan, index) => {
    return <p key={index}>{slogan}</p>;
  });
  
  return (
    <div className="slogans">Slogans:
      {slogans}
    </div>
  );
}

