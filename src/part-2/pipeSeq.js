const pipeSeq = (sequencerSeq, ...params) => {
  const pipes = [];
  const sequencer = sequencerSeq(...params);
  return {
    pipeline(pipe, ...pipeParams) {
      pipes.push(pipe(...pipeParams));
      return this;
    },
    invoke: () => () => () => pipes.reduce((totalVal, pipe) => pipe(totalVal), sequencer()),
  };
};


module.exports = pipeSeq;
