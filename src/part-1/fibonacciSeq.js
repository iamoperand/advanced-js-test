const calcFibonacci = (num) => {
  if (num === 0) {
    return 1;
  }
  if (num === 1) {
    return 1;
  }
  return calcFibonacci(num - 1) + calcFibonacci(num - 2);
};

const fibonacciSeq = () => {
  let currentIteration = 0;
  return () => {
    const temp = currentIteration;
    currentIteration += 1;
    return calcFibonacci(temp);
  };
};


module.exports = fibonacciSeq;
