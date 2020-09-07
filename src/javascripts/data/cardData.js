const cardArray = [
  {
    id: '1',
    action: 'eat',
    score: 100,
    button1: 'veggies',
    button2: 'dessert'
  },
  {
    id: '2',
    action: 'play',
    score: 50,
    button1: 'skateboard',
    button2: 'chess'
  },
  {
    id: '3',
    action: 'fight',
    score: 100,
    button1: 'escape',
    button2: 'knife-fight'
  },
  {
    id: '4',
    action: 'sleep',
    score: 50,
    button1: 'nap',
    button2: 'hibernate'
  },
];

const getData = () => cardArray;

export default { getData, cardArray };
