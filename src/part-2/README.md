## Approach

1. This question took an extremely long time to understand. Especially, the implementation of invoke method.
I hope that I finally came to terms of what it actually is.

2. From the example below:
```
var pipedSeq = pipeSeq(rangeSeq, 2, 3) // 2, 5, 8, 11
  .pipeline(accumulator) // 2, 7 (5+2), 15(7+8), 26(15+11)
  .invoke();
```

As it is written in the problem-specification, accumulator() sums the values of the sequence. So what I need to do is to pass on the values to the accumulator() and then apply invoke to it (which will eventually do what is required).

3. Because the invoke function is applied at the end of chain (and also it is present inside the object returned from pipeSeq) thus it means that the pipeline function must return this.

4. So, pipeline function's implementation would be to pipe all the functions and return this at the end.

5. Thus, I went ahead and initialised an empty array and pushed all the functions that I am getting (in the pipeline) to the empty array (called pipe).
Finally, returned this at the end.

6. The invoke function's implementation is kind-of-similiar to the sequencer function's implementation in Part-1 (similarity in context of number of layers i.e. () => () => {})

7. invoke function is a layered function that will just loop over the pipe array so as to apply all the pipe functions to the current value of the sequencer.

8. invoke -> loop over the pipe array -> apply pipe function (in order) to the current value of the sequencer.

9. Made the isEvenPipe function (similar to accumulatorPipe).

10. Tested both the functionlities (with and without isEvenPipe)

11. Modularised the whole code.