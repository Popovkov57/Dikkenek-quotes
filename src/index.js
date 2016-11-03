var uniqueRandomArray = require('unique-random-array');
var dikkenekQuotes = require('./dikkenek-quotes.json');
var getRandomItem = uniqueRandomArray(dikkenekQuotes);

module.exports = {
  all: dikkenekQuotes,
  random: random
};

function random(number){
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItem = [];
    for (var i = 0; i < number; i++) {
      randomItem.push(getRandomItem());
    }
    return randomItem;
  }
}
