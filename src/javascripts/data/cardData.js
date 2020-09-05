const cardArray = [
  {
    action: 'eat',
    score: 100,
    button1: 'veggies',
    button2: 'dessert'
  },
  {
    action: 'play',
    score: 50,
    button1: 'skateboard',
    button2: 'chess'
  },
  {
    action: 'fight',
    score: 100,
    button1: 'escape',
    button2: 'knife Fight'
  },
  {
    action: 'sleep',
    score: 50,
    button1: 'nap',
    button2: 'hibernate'
  },
];

const getData = () => cardArray;

export default { getData };
