const PseudoGenerator = require('./PseudoGenerator');


const generator = (sequencer) => {
  const pseudoGenerator = new PseudoGenerator(sequencer);
  return pseudoGenerator;
};


module.exports = generator;
