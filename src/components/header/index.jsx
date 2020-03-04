import React from "react";
import "./header.css";
import BackButton from "../backButton";

const Header = ({ title, onBack }) => (
  <header className="header-container">
    <BackButton onClick={onBack} />
    <h1>{title}</h1>
  </header>
);

export default Header;
