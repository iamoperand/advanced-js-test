const pipeSeq = require('./pipeSeq');
const accumulatorPipe = require('./accumulatorPipe');
const isEvenPipe = require('./isEvenPipe');

const generator = require('../part-1/generator');
const rangeSeq = require('../part-1/rangeSeq');


const pipedSeq = pipeSeq(rangeSeq, 2, 3)
  .pipeline(accumulatorPipe)
  .invoke();

const pipedSeqWithIsEvenPipe = pipeSeq(rangeSeq, 2, 3)
  .pipeline(accumulatorPipe)
  .pipeline(isEvenPipe)
  .invoke();


const seq = generator(pipedSeq());
const seqWithIsEven = generator(pipedSeqWithIsEvenPipe());


module.exports = {
  seq,
  seqWithIsEven,
};
