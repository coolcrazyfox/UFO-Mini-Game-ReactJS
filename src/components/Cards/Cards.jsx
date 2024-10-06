import React from "react";
import img1 from "../../assets/images/cards/4.png";
import img2 from "../../assets/images/cards/5.png";
import img3 from "../../assets/images/cards/6.png";
import img4 from "../../assets/images/cards/7.png";
import img5 from "../../assets/images/cards/8.png";
import img6 from "../../assets/images/cards/9.png";
const initCards = [
  { id: 1, name: "", img: img1 },
  { id: 2, name: "", img: img2 },
  { id: 3, name: "", img: img3 },
  { id: 4, name: "", img: img4 },
  { id: 5, name: "", img: img5 },
  { id: 6, name: "", img: img6 },
];
const Cards = () => {
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
