const rangeSeq = require('../../src/part-1/rangeSeq');


describe('rangeSeq', () => {
  const start = 1;
  const step = 2;

  test('should return a function', () => {
    expect(typeof rangeSeq(start, step)).toBe('function');
  });

  test('should return the next value in the range sequence, every time the function gets invoked', () => {
    const rangeSeqFn = rangeSeq(start, step);
    expect(rangeSeqFn()).toBe(1);
    expect(rangeSeqFn()).toBe(3);
    expect(rangeSeqFn()).toBe(5);
    expect(rangeSeqFn()).toBe(7);
  });
});
