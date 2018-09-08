const isPrime = (num) => {
  const sqrtOfNum = Math.sqrt(num);

  if (num === 1) {
    return false;
  }
  let iteration = 2;
  while (iteration <= sqrtOfNum) {
    if (num % iteration === 0) {
      return false;
    }
    iteration += 1;
  }

  return true;
};

const calcNextPrime = (num) => {
  let currentNum = num;
  while (isPrime(currentNum) !== true) {
    currentNum += 1;
  }
  return currentNum;
};

const primeSeq = () => {
  let currentNum = 1;
  return () => {
    const nextPrime = calcNextPrime(currentNum);
    currentNum = nextPrime + 1;
    return nextPrime;
  };
};


module.exports = primeSeq;
