import React from "react";
import Header from "../../components/header";
import Card from "../../components/card";
import BigButton from "../../components/bigButton";
import "./day.css";

import { DAYS_NAMES } from "../../constants";
import { useHistory } from "react-router-dom";

const Day = ({ match, rutina }) => {
  const history = useHistory();
  return (
    <div className="day-container">
      <Header title={DAYS_NAMES[match.params.day].toUpperCase()} onBack={() => history.push("/days")} />
      <Card {...rutina[match.params.day]} />
      <BigButton />
    </div>
  );
};

export default Day;
