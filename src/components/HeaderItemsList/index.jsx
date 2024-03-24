import React from "react";
import "./style.css";
import { FaArrowLeft } from "react-icons/fa";

const index = () => {
  var total = 1000;
  return (
    <header className="container-header">
      <div className="header-items">
        <FaArrowLeft style={{ color: "#fff", fontSize: "2em" }} />
        <h3>Lista de compras</h3>
        <p>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </header>
  );
};

export default index;
