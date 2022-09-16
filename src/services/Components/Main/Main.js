import './Main.css';

import { useState } from 'react';
import Controls from '../Controls/Controls';
import Car from '../Car/Car';
import Slogan from '../Slogan/Slogan';

export default function Main() {
  const [body, setBody] = useState('octane');
  const [wheels, setWheels] = useState('tunica');
  const [decal, setDecal] = useState('duneracer');
  const [bodyCount, setBodyCount] = useState(0);
  const [wheelsCount, setWheelsCount] = useState(0);
  const [decalCount, setDecalCount] = useState(0);
  const [slogan, newSlogan] = useState('');
  const [sloganArr, setSloganArr] = useState([]);


  const handleIncrement = (carPart) => {
    if (carPart === 'body') {
      setBodyCount((prevCount) => prevCount + 1);
    } else if (carPart === 'wheels') {
      setWheelsCount((prevCount) => prevCount + 1);
    } else if (carPart === 'decal') {
      setDecalCount((prevCount) => prevCount + 1);
    }
  }; 

  const addSlogan = (e) => {
    setSloganArr(prevSlogans => [...prevSlogans, slogan]);
    newSlogan('');
  };

  const changedCount = `you have changed the body ${bodyCount} times, the wheels ${wheelsCount} times, and the decal ${decalCount} times`;

  return (
    <div className="carPreview">

      <Car
        body={body}
        wheels={wheels}
        decal={decal}
      />

      <Controls
        body={body}
        setBody={setBody}
        wheels={wheels}
        setWheels={setWheels}
        decal={decal}
        setDecal={setDecal}
        handleIncrement={handleIncrement}
        addSlogan={addSlogan}
        newSlogan={newSlogan}
      />

      <div className='changedCount'>{changedCount}</div>

      <Slogan sloganArr={sloganArr} />
    </div>
  );
}


