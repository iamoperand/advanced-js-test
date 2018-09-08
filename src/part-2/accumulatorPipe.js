const accumulatorPipe = () => {
  let sum = 0;
  return (value) => {
    sum += value;
    return sum;
  };
};


module.exports = accumulatorPipe;
