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


/*
if (process.argv.length != 3)
{
process.stdout.write('Input string is incorrect.');
process.exit(1);
}

else
{
var inputNumber = process.argv[2];

for (var i = 0; i < inputNumber.length; i++)
{
switch(inputNumber[i])
{
case '-':
case '0':
case '1':
case '2':
case '3':
case '4':
case '5':
case '6':
case '7':
case '8':
case '9':
break;

default:
process.stdout.write('Input string is incorrect.');
process.exit(1);
}
}


inputNumber = parseInt(inputNumber);

if (inputNumber >= -10000 & inputNumber <= 10000)
{
var sign = 0

var even = inputNumber % 2

if (inputNumber < 0 & even == 0)
{
sign = -1
}
else
{
sign = 1
}

inputNumber = Math.abs(inputNumber)

for (i = 0, j = 1, k = 0, fib = 0; i < inputNumber; i++, fib = j + k, j = k, k = fib)
{
;
}

fib *= sign

process.stdout.write(fib.toFixed(0));
}
else
{
process.stdout.write('Input string is incorrect.');
process.exit(1);
}
}
*/