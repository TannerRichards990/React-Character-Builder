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
  



  const addSlogan = () => {
    setSloganArr(prevSlogans => [...prevSlogans, slogan]);
    // newSlogan('');
  };

  const changedCount = `you have changed the body ${bodyCount} times, the wheels ${wheelsCount} times, and the decal ${decalCount} times`;

  return (
    <div className="carPreview">


      <Controls
        body={body}
        setBody={setBody}
        setBodyCount={setBodyCount}
        wheels={wheels}
        setWheels={setWheels}
        setWheelCount={setWheelsCount}
        decal={decal}
        setDecal={setDecal}
        setDecalCount={setDecalCount}
        slogan={slogan}
        addSlogan={addSlogan}
        newSlogan={newSlogan}
      />


      <Car
        body={body}
        wheels={wheels}
        decal={decal}
      />

  

      <div className='changedCount'>{changedCount}</div>

      <Slogan sloganArr={sloganArr} />
    </div>
  );
}


