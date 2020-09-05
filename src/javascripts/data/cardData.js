const cardArray = [
  {
    action: 'eat',
    score: 100,
    button1: 'Veggies',
    button2: 'Dessert'
  },
  {
    action: 'play',
    score: 50,
    button1: 'Skateboard',
    button2: 'Chess'
  },
  {
    action: 'fight',
    score: 100,
    button1: 'Escape',
    button2: 'Knife Fight'
  },
  {
    action: 'sleep',
    score: 50,
    button1: 'Nap',
    button2: 'Hibernate'
  },
];

const getData = () => cardArray;

export default { getData };
