// api/index.js

import Chance from 'chance';

const chance = new Chance();

const generateRandomName = () => {
  return chance.first();
};

export default generateRandomName;
