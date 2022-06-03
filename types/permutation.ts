import { getFactorial } from "../main";

export default class Permutation {
    public n: number;
    public r: number[];

    constructor(n: number, r: number[]) {
        this.n = n;
        this.r = r;
    }

    reps(reps: boolean): number {
        if (typeof reps !== 'boolean' && reps !== undefined)
            throw new Error(`Cannot read the property of reps() as '${typeof reps}', provide a boolean.`);
        
        if (reps === undefined) reps = true;

        const n: number = this.n;
        const r: number[] = this.r;

        let result: number = 1;

        if (reps) {
			let numerator: number = getFactorial(n);
			let denominator: number = 1;

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