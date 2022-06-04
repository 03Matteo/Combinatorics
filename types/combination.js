const getFactorial = require('../utils/getFactorial');

module.exports = class Combination {
	/**
	 * @param {number} n
	 * @param {number} k
	 */
	constructor(n, k) {
		this.n = n;
		this.k = k;
	}
	/**
	 * @method reps()
	 * @param {boolean} repetitions - By default is true
	 */
	reps(repetitions) {
		if (typeof repetitions !== 'boolean' && repetitions !== undefined)
			throw new Error(`Cannot read the property of reps() as '${typeof repetitions}', provide a boolean.`);

		if (repetitions === undefined) repetitions = true;

		let n = this.n;
		const k = this.k;

		let result = 1;

		if (repetitions) {
			n += k - 1;

			const numerator = getFactorial(n);
			const denominator = getFactorial(k) * getFactorial(n - k);

			result *= (numerator / denominator).toFixed();
		} else {
			const numerator = getFactorial(n);
			const denominator = getFactorial(k) * getFactorial(n - k);

			result *= (numerator / denominator).toFixed();
		}

		return result;
	}
};
