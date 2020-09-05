import cardData from '../data/cardData';
import buttons from './buttons';

const buildCards = () => {
  const data = cardData.getData();
  data.forEach((item) => {
    $(`#${item.action}`).append(`
    <div class="card-${item.action}">
  <div class="container-${item.action}">
    <h4><b>${item.action.toUpperCase()}</b></h4>
    <h5>${item.score}</h5>
    <button id="btn1-${item.button1}">${item.button1}</button>
    <button id="btn2-${item.button2}">${item.button2}</button>
  </div>
</div>`);
    buttons.eatButton();
  });
};

export default { buildCards };
