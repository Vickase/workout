import React from "react";
import "./exercise.css";

import FitnessCenter from "@material-ui/icons/FitnessCenter";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";

const Exercise = ({ ejercicios }) => {
  return (
    <>
      {ejercicios.map(ejercicio => (
        <div className="exercise-container">
          <div className="fitness">
            <FitnessCenter
              style={{ fontSize: "80px", color: "#BDFF44", margin: "20px" }}
            ></FitnessCenter>
            <ul className="exercise-list">
              <h3 className="exercise-name">{ejercicio.exercise}</h3>
              <li className="exercise-itemlist">
                {ejercicio.repeticiones}x{ejercicio.sets}
              </li>
            </ul>
          </div>
          <div className="icono">
            <Edit
              style={{ fontSize: "40px", color: "#BDFF44", margin: "20px" }}
            ></Edit>
            <Delete
              style={{ fontSize: "40px", color: "#BDFF44", margin: "20px" }}
            ></Delete>
          </div>
        </div>
      ))}
    </>
  );
};

export default Exercise;
