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

const pairOfArrayCards = [...initCards, ...initCards];

const Cards = () => {
  const [arrayCards, setArrayCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  const randomSort = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  useEffect(() => {
    setArrayCards(randomSort(pairOfArrayCards));
  }, []);
  return (
    <div>
      <p>Moves:{moves}</p>
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
