const partialSumSeq = (...numbers) => {
  let currentIndex = 0;
  let currentSum = numbers[currentIndex];
  return () => {
    const temp = currentSum;

    currentIndex += 1;
    if (currentIndex > numbers.length) {
      throw new Error('Out Of Bounds Exception');
    }
    currentSum += numbers[currentIndex];
    return temp;
  };
};


module.exports = partialSumSeq;
