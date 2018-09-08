class PseudoGenerator {
  constructor(sequencer) {
    this.sequencer = sequencer;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    return this.sequencer();
  }
}

module.exports = PseudoGenerator;
