const rangeSeq = (start, step) => {
  let currentIteration = start;
  return () => {
    const temp = currentIteration;
    currentIteration += step;
    return temp;
  };
};


module.exports = rangeSeq;
