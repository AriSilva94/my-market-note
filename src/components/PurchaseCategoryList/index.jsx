import React from "react";
import "./style.css";
import { IoStorefront } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const index = ({
  categoryItems,
  handleOpenCard,
  isCardDetails,
  handleOpenCardDetails,
  handleCloseCardDetails,
}) => {
  return (
    <>
      {categoryItems?.map(({ id, title, amount, budget, available, total }) => {
        return (
          <div className="container" key={id}>
            <div className="card-header">
              <IoStorefront style={{ color: "#163020", fontSize: "2em" }} />
              <h2>{title}</h2>
              <IoMdMore
                onClick={
                  !isCardDetails
                    ? handleOpenCardDetails
                    : handleCloseCardDetails
                }
                style={{ fontSize: "2em", zIndex: 1 }}
              />
              {isCardDetails ? (
                <div className="card-details">
                  <p>
                    <MdDelete style={{ color: "#163020", fontSize: "1em" }} />{" "}
                    Deletar
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
            <hr />
            <button onClick={() => handleOpenCard(title, budget)}>
              <div className="card-content">
                <div className="content">
                  <p>
                    Orçamento:{" "}
                    {budget.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p>
                    Disponível:{" "}
                    {available.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p>
                    Gasto:{" "}
                    {total.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <div className="products">
                  <span>{amount}</span> {amount > 1 ? "produtos" : "produto"}
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default index;
