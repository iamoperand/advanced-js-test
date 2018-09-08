const primeSeq = require('../../src/part-1/primeSeq');


describe('primeSeq', () => {
  test('should return a function', () => {
    expect(typeof primeSeq()).toBe('function');
  });

  test('should return the next value in the prime sequence, every time the function gets invoked', () => {
    const primeSeqFn = primeSeq();
    expect(primeSeqFn()).toBe(2);
    expect(primeSeqFn()).toBe(3);
    expect(primeSeqFn()).toBe(5);
    expect(primeSeqFn()).toBe(7);
    expect(primeSeqFn()).toBe(11);
    expect(primeSeqFn()).toBe(13);
  });
});
