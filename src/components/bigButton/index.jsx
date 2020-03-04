import React from "react";
import { Link } from "react-router-dom";
import AddCircle from "@material-ui/icons/AddCircle";

const BigButton = () => (
  <Link to="/add" className="big-button">
    <AddCircle style={{fontSize: "75px", color: "#BDFF44" }} />
  </Link>
);

export default BigButton;
