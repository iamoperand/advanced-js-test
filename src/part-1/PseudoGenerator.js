class PseudoGenerator {
  constructor(sequencer) {
    this.sequencer = sequencer;
  }

  next() {
    return this.sequencer();
  }
}

module.exports = PseudoGenerator;
