import { getFactorial } from "../main";

export default class Combination {
    public n: number;
    public k: number;

    constructor(n: number, k: number) {
        this.n = n;
        this.k = k;
    }

    reps(reps: boolean): number  {
        if (typeof reps !== 'boolean' && reps !== undefined)
            throw new Error(`Cannot read the property of reps() as '${typeof reps}', provide a boolean.`);
        
        if (reps === undefined) reps = true;

        let n: number = this.n;
        const k: number = this.k;

        let result: number = 1;

        if (reps) {
            n += k - 1;

            const numerator: number = getFactorial(n);
            const denominator: number = getFactorial(k) * getFactorial(n - k);
            
            result *= parseInt((numerator / denominator).toFixed());
        } else {
            const numerator: number = getFactorial(n);
            const denominator: number = getFactorial(k) * getFactorial(n - k);
            
            result *= parseInt((numerator / denominator).toFixed());
        }

        return result;
    }
}