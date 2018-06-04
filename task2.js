/* Task 2 */

var inputNumber = parseInt(process.argv[2]);

if (inputNumber >= -10000 & inputNumber <= 10000)
for (i = 0, j = 1, k = 0, fib = 0; i < Math.abs(inputNumber); i++, fib = j + k, j = k, k = fib)
;

if (inputNumber < 0 & (inputNumber % 2) == 0)
fib *= -1;

process.stdout.write(fib.toFixed(0));