# What is this?

Gives back the result of the type of combinatorics given.

# Installation

`npm i combinatorics`

Then...

```
const {
    Disposition,
    Permutation,
    Combination,
    getFactorial
} = require('@03matteo/combinatorics');

const disp = new Disposition(n, k).reps(<true|false>)
const perm = new Permutation(n, [h1, h2, h3, ...]).reps(<true|false>)
const comb = new Combination(n, k).reps(<true|false>)

const fact = getFactorial(number)
```