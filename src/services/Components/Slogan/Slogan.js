import React from 'react';
import './Slogan.css';

export default function Slogan({ sloganArr }) {
  const slogans = sloganArr.map((slogan, index) => {
    <p key={index}>{Slogan}</p>;
  });

  return (
    <div className="slogans">
      {slogans}
    </div>
  );
}

