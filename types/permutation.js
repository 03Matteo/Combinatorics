const getFactorial = require('../main');

module.exports = class Permutation {
	/**
	 * @param {number} n - a
     * @param {[nubers]} r - b
	 */
	constructor(n, r) {
		this.n = n;
		this.r = r;

		if (!r.length && typeof r !== 'number') {
			throw new TypeError('The second parameter must be a number or an array of numbers.');
		}

		this.r = [ r ];
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
		const r = this.r;

		let result = 1;

		if (repetitions) {
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
};
