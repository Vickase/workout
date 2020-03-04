import React from "react";
import Exercise from "../exercise";

import "./card.css";

const Card = ({ dia, ejercicios }) => {
  if(!ejercicios.length) return <p>No exercises this day :(</p>;
  return (
    <div className={"card-container"}>
      <section className="card-section">
        <Exercise ejercicios={ejercicios}></Exercise>
      </section>
    </div>
  );
};

export default Card;
