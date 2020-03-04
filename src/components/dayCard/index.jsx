import React from "react";
import { Link } from "react-router-dom";
import "./dayCard.css";

const DayCard = ({ dia, ejercicios, dayKey }) => (
  <Link to={`/day/${dayKey}`} className="daycard-container">
    <div className="daycard-title">{dia}</div>
    <span className="daycard-qty">({ejercicios.length})</span>
  </Link>
);

export default DayCard;
