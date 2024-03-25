import React from "react";
import "./style.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa";

const index = ({ titleModal, isCard, budget, handleCloseCard }) => {
  return (
    <header className="container-header">
      <div className="header-items">
        {isCard ? (
          <FaArrowLeft
            onClick={handleCloseCard}
            style={{ color: "#fff", fontSize: "2em" }}
          />
        ) : (
          <RxHamburgerMenu style={{ color: "#fff", fontSize: "2em" }} />
        )}

        <h3>{titleModal}</h3>
        <span>
          {isCard ? (
            <>
              {budget.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </>
          ) : (
            <>{new Date().toLocaleDateString("pt-br")}</>
          )}
        </span>
      </div>
    </header>
  );
};

export default index;
