const {
  seq,
  seqWithIsEven,
} = require('../../src/part-2/index');


describe('Piped Sequence', () => {
  test('seq with only accumulator pipe | should return the accumulated range sequencer', () => {
    expect(seq.next()).toBe(2);
    expect(seq.next()).toBe(7);
    expect(seq.next()).toBe(15);
    expect(seq.next()).toBe(26);
  });

  test('seq with accumulator and isEven pipes | should return the isEven range sequencer', () => {
    expect(seqWithIsEven.next()).toEqual({
      status: true,
      number: 2,
    });
    expect(seqWithIsEven.next()).toEqual({
      status: false,
      number: 7,
    });
    expect(seqWithIsEven.next()).toEqual({
      status: false,
      number: 15,
    });
    expect(seqWithIsEven.next()).toEqual({
      status: true,
      number: 26,
    });
  });
});
