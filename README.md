# What is this?

Gives back the result of the type of combinatorial calculus given.

# Installation

`npm i combinatorial-calculus`

Then...

```
const {
    Disposition,
    Permutation,
    Combination,
    getFactorial
} = require('combinatorial-calculus');

const disp = new Disposition(n, k).reps(<true|false>)
const perm = new Permutation(n, [h1, h2, h3, ...]).reps(<true|false>)
const comb = new Combination(n, k).reps(<true|false>)

const fact = getFactorial(number)
```