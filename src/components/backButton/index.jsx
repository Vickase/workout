import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBack from "@material-ui/icons/ArrowBack";

function BackButton() {
  let history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <ArrowBack
      style={{ fontSize: "40px", color: "#BDFF44", cursor: "pointer" }}
      onClick={handleClick}
    />
  );
}

export default BackButton;
