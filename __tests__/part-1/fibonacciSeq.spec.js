const fibonacciSeq = require('../../src/part-1/fibonacciSeq');


describe('fibonacciSeq', () => {
  test('should return a function', () => {
    expect(typeof fibonacciSeq()).toBe('function');
  });

  test('should return the next value in the fibonacci sequence, every time the function gets invoked', () => {
    const fibonacciSeqFn = fibonacciSeq();
    expect(fibonacciSeqFn()).toBe(1);
    expect(fibonacciSeqFn()).toBe(1);
    expect(fibonacciSeqFn()).toBe(2);
    expect(fibonacciSeqFn()).toBe(3);
    expect(fibonacciSeqFn()).toBe(5);
    expect(fibonacciSeqFn()).toBe(8);
    expect(fibonacciSeqFn()).toBe(13);
  });
});
