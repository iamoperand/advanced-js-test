const generator = require('./generator');

const factorialSeq = require('./factorialSeq');
const fibonacciSeq = require('./fibonacciSeq');
const rangeSeq = require('./rangeSeq');
const primeSeq = require('./primeSeq');
const partialSumSeq = require('./partialSumSeq');


const factorialSeqGenerator = generator(factorialSeq());
const fibonacciSeqGenerator = generator(fibonacciSeq());
const rangeSeqGenerator = generator(rangeSeq(1, 2));
const primeSeqGenerator = generator(primeSeq());
const partialSumSeqGenerator = generator(partialSumSeq(1, 3, 7, 2, 0));


module.exports = {
  factorialSeqGenerator,
  fibonacciSeqGenerator,
  rangeSeqGenerator,
  primeSeqGenerator,
  partialSumSeqGenerator,
};
