let full = 100;

const veggies = () => {
  if (full >= 0 && full <= 100) {
    full += 10;
  }
  return full;
};

const dessert = () => {
  if (full >= 0) {
    full -= 3;
  } else if (full <= 0) {
    full = 0;
  }
  return full;
};

const eatButton = () => {
  $('#btn1-veggies').click(() => {
    $('#eat-score').html('');
    $('#eat-score').html(`<div>${veggies()}</div>`);
  });
  $('#btn2-dessert').click(() => {
    $('#eat-score').html('');
    $('#eat-score').html(`<div>${dessert()}</div>`);
  });
};
export default { eatButton };
