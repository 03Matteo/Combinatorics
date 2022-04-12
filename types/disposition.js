module.exports = class Disposition {
	/**
	 * @param {number} n - a
	 * @param {number} k - b 
	 */
	constructor(n, k) {
		this.n = n;
		this.k = k;
	}
	/**
	 * @method reps()
	 * @param {boolean} repetitions - By default are true
	 */

	reps(repetitions) {
		if (typeof repetitions !== 'boolean' && repetitions !== undefined)
			throw new Error(`Cannot read the property of reps() as '${typeof repetitions}', provide a boolean.`);

		if (repetitions === undefined) repetitions = true;

		const n = this.n;
		const k = this.k;

		if (n < k) throw new Error('The first parameter must be greater than the second.');

		let result = 1;

		if (repetitions) {
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
};
