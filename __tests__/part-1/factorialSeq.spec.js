const factorialSeq = require('../../src/part-1/factorialSeq');


describe('factorialSeq', () => {
  test('should return a function', () => {
    expect(typeof factorialSeq()).toBe('function');
  });

  test('should give the factorial of the next value, each time the function is invoked', () => {
    const factorialSeqFn = factorialSeq();
    expect(factorialSeqFn()).toBe(1);
    expect(factorialSeqFn()).toBe(1);
    expect(factorialSeqFn()).toBe(2);
    expect(factorialSeqFn()).toBe(6);
    expect(factorialSeqFn()).toBe(24);
  });
});
