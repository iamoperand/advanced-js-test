const partialSumSeq = require('../../src/part-1/partialSumSeq');


describe('partialSumSeq', () => {
  const params = [1, 3, 7, 2, 0];
  test('should return a function', () => {
    expect(typeof partialSumSeq(...params)).toBe('function');
  });

  test('should return the next value in the partialSum sequence, every time the function gets invoked', () => {
    const partialSumSeqFn = partialSumSeq(...params);
    expect(partialSumSeqFn()).toBe(1);
    expect(partialSumSeqFn()).toBe(4);
    expect(partialSumSeqFn()).toBe(11);
    expect(partialSumSeqFn()).toBe(13);
    expect(partialSumSeqFn()).toBe(13);
  });

  test('should throw an error, if the sequence is done', () => {
    const partialSumSeqFn = partialSumSeq(...params);
    expect(partialSumSeqFn()).toBe(1);
    expect(partialSumSeqFn()).toBe(4);
    expect(partialSumSeqFn()).toBe(11);
    expect(partialSumSeqFn()).toBe(13);
    expect(partialSumSeqFn()).toBe(13);
    expect(() => partialSumSeqFn()).toThrow();
  });
});
