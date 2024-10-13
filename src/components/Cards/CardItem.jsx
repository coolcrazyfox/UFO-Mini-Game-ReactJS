import React from "react";
import { useEffect, useState } from "react";
import imgQ from "../../assets/images/question-lemon.png";
import "../../styles/Cards.css";
const CardItem = ({
  card,
  isFlipped,
  index,
  // flipCardChildrenF,
  setOpenedCards,
  setMoves,
}) => {
  const flipCardChildrenF = (index) => {
    // setOpenedCards((o) => [...o, index]);
    setMoves((preMove) => preMove + 1);
  };
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={flipCardChildrenF(index)}
    >
      <div className="inner">
        <div className="front">
          <img alt="front_card" src={card.img} width={"100"} />
        </div>
        <div className="back">
          <img alt="q_card" src={imgQ} width={"145"} />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
