const { getFactorial } = require("../main");

export default class Permutation {
    constructor(n, r) {
        this.n = n;
        this.r = r;
    }

    reps(reps) {
        if (typeof reps !== 'boolean' && reps !== undefined)
            throw new Error(`Cannot read the property of reps() as '${typeof reps}', provide a boolean.`);

        if (reps === undefined) reps = true;

        const n = this.n;
        const r = this.r;

        let result = 1;

        if (reps) {
            let numerator = getFactorial(n);
            let denominator = 1;

            for (const rep of r) {
                denominator *= getFactorial(rep);
            }

            result = numerator / denominator;
        } else {
            result = getFactorial(n);
        }

        return result;
    }
}