import React, { useState } from "react";
import Inputs from "../inputs";
import "./form.css";

import { DAYS } from "../../constants";
import Header from "../header";
import Button from "../button";

const Form = ({ addEjercicio }) => {
  const [dia, setDia] = useState(DAYS.MONDAY);
  const [exercise, setExercise] = useState("");
  const [repeticiones, setRepeticiones] = useState("");
  const [sets, setSets] = useState("");

  return (
    <div className="form-container">
      <Header title="WORKOUT" />
      <section className="form-section">
        <Inputs
          setExercise={setExercise}
          setDia={setDia}
          setRepeticiones={setRepeticiones}
          setSets={setSets}
        />
      </section>
      <footer className="form-footer">
        <Button
          onClick={_e => addEjercicio({ exercise, repeticiones, sets }, dia)}
        >
          Add exercise
        </Button>
      </footer>
    </div>
  );
};

export default Form;
