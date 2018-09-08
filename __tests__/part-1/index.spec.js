const {
  factorialSeqGenerator,
  fibonacciSeqGenerator,
  rangeSeqGenerator,
  primeSeqGenerator,
  partialSumSeqGenerator,
} = require('../../src/part-1/index');


describe('Pseudo-Generators', () => {
  test('factorialSeqGenerator sequence', () => {
    expect(factorialSeqGenerator.next()).toBe(1);
    expect(factorialSeqGenerator.next()).toBe(1);
    expect(factorialSeqGenerator.next()).toBe(2);
    expect(factorialSeqGenerator.next()).toBe(6);
    expect(factorialSeqGenerator.next()).toBe(24);
  });

  test('fibonacciSeqGenerator sequence', () => {
    expect(fibonacciSeqGenerator.next()).toBe(1);
    expect(fibonacciSeqGenerator.next()).toBe(1);
    expect(fibonacciSeqGenerator.next()).toBe(2);
    expect(fibonacciSeqGenerator.next()).toBe(3);
    expect(fibonacciSeqGenerator.next()).toBe(5);
    expect(fibonacciSeqGenerator.next()).toBe(8);
    expect(fibonacciSeqGenerator.next()).toBe(13);
  });

  test('rangeSeqGenerator sequence', () => {
    expect(rangeSeqGenerator.next()).toBe(1);
    expect(rangeSeqGenerator.next()).toBe(3);
    expect(rangeSeqGenerator.next()).toBe(5);
    expect(rangeSeqGenerator.next()).toBe(7);
  });

  test('primeSeqGenerator sequence', () => {
    expect(primeSeqGenerator.next()).toBe(2);
    expect(primeSeqGenerator.next()).toBe(3);
    expect(primeSeqGenerator.next()).toBe(5);
    expect(primeSeqGenerator.next()).toBe(7);
    expect(primeSeqGenerator.next()).toBe(11);
    expect(primeSeqGenerator.next()).toBe(13);
  });

  test('partialSumSeqGenerator sequence', () => {
    expect(partialSumSeqGenerator.next()).toBe(1);
    expect(partialSumSeqGenerator.next()).toBe(4);
    expect(partialSumSeqGenerator.next()).toBe(11);
    expect(partialSumSeqGenerator.next()).toBe(13);
    expect(partialSumSeqGenerator.next()).toBe(13);
  });

  test('partialSumSeqGenerator should throw an error, if the sequence is done', () => {
    expect(() => partialSumSeqGenerator.next()).toThrow();
  });
});
