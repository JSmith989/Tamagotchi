import '../styles/main.scss';
import cardData from './data/cardData';
import tamagotchiCard from './components/tamagotchiCard';

const init = () => {
  cardData.getData();
  tamagotchiCard.tamaCards();
};

init();
