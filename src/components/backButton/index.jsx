import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBack from "@material-ui/icons/ArrowBack";

function BackButton({ onClick }) {
  let history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <ArrowBack
      style={{ fontSize: "40px", color: "#BDFF44", cursor: "pointer" }}
      onClick={onClick || handleClick}
    />
  );
}

export default BackButton;
