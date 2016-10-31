var uniqueRandomArray = require('unique-random-array');
var dikkenekQuotes = require('./dikkenek.json');

module.exports = {
  all: dikkenekQuotes,
  random: uniqueRandomArray(dikkenekQuotes)
};
