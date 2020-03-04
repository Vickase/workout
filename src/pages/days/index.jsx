import React from "react";
import { useHistory } from "react-router-dom";
import DayCard from "../../components/dayCard";
import Header from "../../components/header";
import "./days.css";

const Days = ({ rutina }) => {
  const history = useHistory();
  return (
    <div className="days-container">
      <Header title="DAYS" onBack={() => history.push("/")} />
      <div className="daycards-container">
        {Object.keys(rutina).map(key => (
          <DayCard {...rutina[key]} dayKey={key} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Days;
