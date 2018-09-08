const calcFactorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * calcFactorial(num - 1);
};

const factorialSeq = () => {
  let currentNum = 0;
  return () => {
    const temp = currentNum;
    currentNum += 1;
    return calcFactorial(temp);
  };
};

module.exports = factorialSeq;
