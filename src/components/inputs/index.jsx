import React from "react";
import { DAYS, DAYS_NAMES } from "../../constants";

import "./inputs.css";

const Inputs = props => {
  return (
    <div className="input-container">
      <header className="input-header">
        <h3>Insert Routine</h3>
      </header>
      <label> Seleccione un día</label>
      <select
        placeholder="Ingrese el día"
        id="numero-dia"
        className="input"
        onChange={e => props.setDia(e.target.value)}
      >
        {Object.values(DAYS).map(val => (
          <option value={val}>{DAYS_NAMES[val]}</option>
        ))}
      </select>
      <label> Ejercicio</label>
      <input
        className="input"
        type="text"
        placeholder="Ingrese ejercicio"
        id="ejercicio"
        onChange={e => props.setExercise(e.target.value)}
      ></input>
      <label> Repeticiones y sets</label>
      <div className="smaller-container">
        <input
          className="input"
          placeholder="Ingrese cantidad de repeticiones"
          type="number"
          onChange={e => props.setRepeticiones(e.target.value)}
        ></input>
        <input
          className="input"
          placeholder="Ingrese cantidad de sets"
          type="number"
          onChange={e => props.setSets(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Inputs;
