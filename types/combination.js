const { getFactorial } = require("../main");

module.exports = class Combination {

    constructor(n, k) {
        this.n = n;
        this.k = k;
    }

    reps(reps) {
        if (typeof reps !== 'boolean' && reps !== undefined)
            throw new Error(`Cannot read the property of reps() as '${typeof reps}', provide a boolean.`);

        if (reps === undefined) reps = true;

        let n = this.n;
        const k = this.k;

        let result = 1;

        if (reps) {
            n += k - 1;

            const numerator = getFactorial(n);
            const denominator = getFactorial(k) * getFactorial(n - k);

            result *= parseInt((numerator / denominator).toFixed());
        } else {
            const numerator = getFactorial(n);
            const denominator = getFactorial(k) * getFactorial(n - k);

            result *= parseInt((numerator / denominator).toFixed());
        }

        return result;
    }
}