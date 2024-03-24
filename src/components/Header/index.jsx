import React from "react";
import "./style.css";
import { RxHamburgerMenu } from "react-icons/rx";

const index = () => {
  return (
    <header className="container-header">
      <div className="header-items">
        <RxHamburgerMenu style={{ color: "#fff", fontSize: "2em" }} />
        <h3>Lista de compras</h3>
        <span>{new Date().toLocaleDateString("pt-br")}</span>
      </div>
    </header>
  );
};

export default index;
