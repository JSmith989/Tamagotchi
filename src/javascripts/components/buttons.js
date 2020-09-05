import cardData from '../data/cardData';

const eatButton = () => {
  $('#btn1-veggies').click(() => {
    if (cardData.cardArray.score > 0 && cardData.cardArray.score < 100) {
      cardData.cardArray.score += 10;
    }
  });
  $('#btn2-dessert').click(() => {
    if (cardData.cardArray.score > 0) {
      cardData.cardArray.score -= 10;
    }
  });
};

export default { eatButton };
