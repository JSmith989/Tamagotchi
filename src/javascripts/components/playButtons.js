let fun = 50;

const skateBoard = () => {
  if (fun >= 0 && fun < 100) {
    fun += 50;
  }
  return fun;
};

const chess = () => {
  if (fun >= 0 && fun <= 100) {
    fun += 2;
  } else if (fun >= 0) {
    fun = 100;
  }
  return fun;
};

const playButton = () => {
  $('#btn1-skateboard').click(() => {
    $('#play-score').html('');
    $('#play-score').html(`<div>${skateBoard()}</div>`);
  });
  $('#btn2-chess').click(() => {
    $('#play-score').html('');
    $('#play-score').html(`<div>${chess()}</div>`);
  });
};
export default { playButton };
