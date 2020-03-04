import React from "react";
import Button from "../button";
import { useHistory } from "react-router-dom";
import "./overlay.css"

const Overlay = () => {
  const history = useHistory();
  return (
    <div className="overlay-container">
      <header className="overlay-header">
        <h1 className="overlay-title">LET'S WORKOUT</h1>
      </header>
      <div className="overlay-button-container">
        <Button onClick={_e => history.push("/days")}>Check routine!</Button>
      </div>
    </div>
  );
};

export default Overlay;
