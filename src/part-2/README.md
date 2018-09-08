## Approach

1. Took a long time to understand this question. Especially, the implementation of `invoke` method.

  > I hope that I finally came to terms of what it actually is.

2. From the example below:
```javascript
var pipedSeq = pipeSeq(rangeSeq, 2, 3)
  .pipeline(accumulator)
  .invoke();
```

  > As it is written in the problem-specification, `accumulator()` sums the values of the sequence.

  > So what I need to do is to pass on the values to the `accumulator()` and then apply `invoke()` to it (which will eventually do what is required).

3. Because the `invoke` function is applied at the end of chain (and also it is present inside the object returned from pipeSeq), it means that the `pipeline` function must return **`this`**.

4. So, `pipeline` function's implementation would be to pipe all the functions and return **`this`** at the end.

5. Thus, I went ahead and initialised an empty array and pushed all the functions that I am getting (in the pipeline) to the empty array (called `pipes`).
Finally, returned **`this`** at the end.

6. `invoke` function is a **layered** function that will just loop over the `pipes` array so as to apply all the `pipe` functions to the current value of the sequencer.

    >`invoke` -> loop over the `pipes` array -> apply `pipe` function (in order) to the current value of the `sequencer`.

7. Made the `isEvenPipe` function (similar to `accumulatorPipe`).

8. Tested both the functionalities (with and without `isEvenPipe`)

9.  Finally, went ahead and `modularised` the code.