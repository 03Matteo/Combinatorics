module.exports = (n) => {
    let nPassed = 0;
    let nLeft = n;

    let result = 1;

    for (let i = 0; i < Math.ceil(n / 2); i++) {
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