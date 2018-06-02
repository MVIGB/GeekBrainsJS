/* Task 2 */

var inputNumber = parseInt(process.argv[2]);

if (inputNumber >= -10000 & inputNumber <= 10000)
{
var sign = 1;

if (inputNumber < 0 & (inputNumber % 2) == 0)
sign = -1;

inputNumber = Math.abs(inputNumber);

for (i = 0, j = 1, k = 0, fib = 0; i < inputNumber; i++, fib = j + k, j = k, k = fib)
;

fib *= sign;

console.log(fib);
}