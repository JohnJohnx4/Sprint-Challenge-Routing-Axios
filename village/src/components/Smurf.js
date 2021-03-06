import React from 'react';
import './Smurf.css';
const Smurf = (props) => {
  return (
    <li className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
    </li>
  );
}

export default Smurf;