import React from "react";
import img1 from "../../assets/images/cards/14.png";
import img2 from "../../assets/images/cards/13.png";
import img3 from "../../assets/images/cards/6.png";
import img4 from "../../assets/images/cards/10.png";
import img5 from "../../assets/images/cards/8.png";
import img6 from "../../assets/images/cards/9.png";
import imgQ from "../../assets/images/question-lemon.png";
import { useEffect, useState } from "react";
import "../../styles/Cards.css";

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
  const flipCard = (index) => {
    setOpenedCards((opened) => [...opened, index]);
    setMoves((preMove) => preMove + 1);
  };
  useEffect(() => {
    if (openedCards < 2) return;
    const firstMatched = arrayCards[openedCards[0]];
    const secondMatched = arrayCards[openedCards[1]];
    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }
    if (openedCards.length === 2) setTimeout(() => setOpenedCards([]), 2000);
  }, [openedCards]);
  const handleRestartGame = () => {};
  return (
    <div className="container">
      <p className="number_of_strokes">
        Moves:<span className="point">{moves}</span>
      </p>
      <div className="box_cards">
        {arrayCards.map((card, index) => {
          let isFlipped = false;
          if (openedCards.includes(index)) isFlipped = true;
          if (matched.includes(card.id)) isFlipped = true;
          return (
            <div
              className={`card ${isFlipped ? "flipped" : ""}`}
              key={card.id}
              onClick={flipCard(index)}
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
        })}
      </div>
      <div className="btn_container">
        <button className="button_restart" onClick={handleRestartGame}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Cards;
