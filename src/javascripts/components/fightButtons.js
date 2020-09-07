let strength = 100;

const escape = () => {
  if (strength >= 0 && strength <= 100) {
    strength += 1;
  }
  return strength;
};

const knifeFight = () => {
  if (strength >= 0) {
    strength -= 10;
  } else if (strength <= 0) {
    strength = 0;
  }
  return strength;
};

const fightButton = () => {
  $('#btn1-escape').click(() => {
    $('fight-score').html('');
    $('#fight-score').html(`<div>${escape()}</div>`);
  });
  $('#btn2-knife-fight').click(() => {
    $('#fight-score').html('');
    $('#fight-score').html(`<div>${knifeFight()}</div>`);
  });
};
export default { fightButton };
