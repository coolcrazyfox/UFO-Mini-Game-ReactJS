import React from "react";
import img1 from "../../assets/images/cards/14.png";
import img2 from "../../assets/images/cards/13.png";
import img3 from "../../assets/images/cards/6.png";
import img4 from "../../assets/images/cards/10.png";
import img5 from "../../assets/images/cards/8.png";
import img6 from "../../assets/images/cards/9.png";

import imgQ from "../../assets/images/question-lemon.png";
import { useEffect, useState } from "react";

const initCards = [
  { id: 1, name: "1", img: img1 },
  { id: 2, name: "2", img: img2 },
  { id: 3, name: "3", img: img3 },
  { id: 4, name: "4", img: img4 },
  { id: 5, name: "5", img: img5 },
  { id: 6, name: "6", img: img6 },
];

const Cards = () => {
  const [arrayCards, setArrayCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const pairOfArrayCards = [...initCards, ...initCards];
  const randomSort = (array) => {
    let currentIndex = array.length;
    let tempraryVaue;
    let randomIndex;
  };
  return (
    <div>
      <div>
        {initCards.map((card, index) => {
          return (
            <div key={card.id}>
              <img alt="" src={card.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
