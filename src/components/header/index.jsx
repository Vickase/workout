import React from "react";
import "./header.css";
import BackButton from "../backButton";

const Header = ({ title }) => (
  <header className="header-container">
    <BackButton />
    <h1>{title}</h1>
  </header>
);

export default Header;
