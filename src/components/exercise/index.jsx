import React from "react";
import "./exercise.css";

const Exercise = ({ ejercicios }) => {
  return (
    <>
      {ejercicios.map(ejercicio => (
        <div className="exercise-container">
          <ul className="exercise-list">
            <h3 className="exercise-name">{ejercicio.exercise}</h3>
            <li className="exercise-itemlist">
              {ejercicio.repeticiones}x{ejercicio.sets}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Exercise;
