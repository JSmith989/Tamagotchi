import '../styles/main.scss';
import cardData from './data/cardData';
import tamagotchiCard from './components/tamagotchiCard';
// import buttons from './components/buttons';

const init = () => {
  $('#app').html('<h1>Tamagotchi</h1>');
  cardData.getData();
  tamagotchiCard.buildCards();
  // buttons.eatButton();
};

init();
