module.exports = class Disposition {
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

        if (n < k) throw new Error('The first parameter must be greater than the second.');

        let result = 1;

        if (reps) {
            result *= Math.pow(n, k);
        } else {
            let kPassed = 0;
            let nLeft = n;

            for (let i = 0; i < Math.ceil(k / 2); i++) {
                if (kPassed === k - 1) {
                    result *= nLeft;
                } else if (kPassed !== k) {
                    result *= nLeft * (nLeft - 1);

                    nLeft -= 2;
                    kPassed += 2;
                }
            }
        }

        return result;
    }
}