import Disposition from './types/combination';
import Combination from './types/combination';
import Permutation from './types/permutation';

export const getFactorial = (n: number): number => {
    
	let nPassed: number = 0;
	let nLeft: number = n;

	let result: number = 1;

	for (let i: number = 0; i < Math.ceil(n / 2); i++) {
		if (nLeft - 2 === 0) {
			result *= nLeft;
		} else if (nPassed !== n - 1) {
			result *= nLeft * (nLeft - 1);

			nLeft -= 2;
			nPassed += 2;
		}
	}

	return result;
};

export default {
    Disposition,
    Combination,
    Permutation,
    getFactorial
}