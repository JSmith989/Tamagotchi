import cardData from '../data/cardData';
import eatButtons from './eatButtons';
import playButtons from './playButtons';
import fightButtons from './fightButtons';
import sleepButtons from './sleepButtons';

// const buildCards = () => {
//   const data = cardData.getData();
//   data.forEach((item) => {
//     $(`#${item.action}`).append(`
//     <div class="card-${item.action}">
//   <div class="container-${item.action}">
//     <h4><b>${item.action.toUpperCase()}</b></h4>
//     <div id="${item.id}">
//     <h5>${item.score}</h5>
//     </div>
//     <button id="btn1-${item.button1}">${item.button1}</button>
//     <button id="btn2-${item.button2}">${item.button2}</button>
//   </div>
// </div>`);

//   });
// };

const buildCards = (item) => {
  const domString = `
  <div class="card-${item.action}">
<div class="container">
  <h4><b>${item.action.toUpperCase()}</b></h4>
  <div id="${item.id}">
  <h5 id="${item.action}-score">${item.score}</h5>
  </div>
  <button id="btn1-${item.button1}">${item.button1}</button>
  <button id="btn2-${item.button2}">${item.button2}</button>
</div>
</div>`;
  return domString;
};

const tamaCards = () => {
  $('#eat').html('');
  $('#play').html('');
  $('#fight').html('');
  $('#sleep').html('');
  const data = cardData.getData();
  data.forEach((item, index) => {
    if (item.action === 'eat') {
      $('#eat').append(buildCards(item, index));
    }
    if (item.action === 'play') {
      $('#eat').append(buildCards(item, index));
    }
    if (item.action === 'fight') {
      $('#eat').append(buildCards(item, index));
    }
    if (item.action === 'sleep') {
      $('#eat').append(buildCards(item, index));
    }
  });
  eatButtons.eatButton();
  playButtons.playButton();
  fightButtons.fightButton();
  sleepButtons.sleepButton();
};

export default { buildCards, tamaCards };
