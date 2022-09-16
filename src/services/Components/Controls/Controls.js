import './Controls.css';

export default function Controls({
  body,
  setBody,
  wheels,
  setWheels,
  decal,
  setDecal,
  setBodyCount,
  setWheelsCount,
  setDecalCount,
}) 

{
  const handleChangeBody = (e) => {
    setBody(e.target.value);
    setBodyCount((prevCount) => prevCount + 1);
  };

  const handleChangeWheels = (e) => {
    setWheels(e.target.value);
    setWheelsCount((prevCount) => prevCount + 1);
  };

  const handleChangeDecal = (e) => {
    setDecal(e.target.value);
    setDecalCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="controls">
      <label>
        Body
        <select value={body} onChange={handleChangeBody}>
          <option value="octane">Octane</option>
          <option value="dominus">Dominus</option>
          <option value="Fennec">Fennec</option>
        </select>
      </label>
      <label>
        Wheels
        <select value={wheels} onChange={handleChangeWheels}>
          <option value="Oem">Oem</option>
          <option value="Deici">Deici</option>
          <option value="Tunica">Tunica</option>
        </select>
      </label>
      <label>
        Decal
        <select value={decal} onChange={handleChangeDecal}>
          <option value="duneracer">Duneracer</option>
          <option value="interstellar">Interstellar</option>
          <option value="chameleon">Chameleon</option>
        </select>
      </label>
      
    </div>

  );
}

