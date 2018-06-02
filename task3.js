/* Task 3 */

var inputString = process.argv[2];

if (inputString.length >= 1 & inputString.length <= 10000)
{
var vowels = inputString.replace(/[^AEIOUaeiou]/g, "");
var consonants = inputString.replace(/[AEIOUaeiou0-9 ]/g, "").replace(/[^a-zA-Z]/g, "");
var digits = inputString.replace(/[^0-9]/g, "");

var code = (vowels.length == 0) ? '0' : '1';
code += (consonants.length == 0) ? '0' : '1';
code += (digits.length == 0) ? '0' : '1';

//console.log(code)

switch(code)
{
case '111':
console.log(vowels + ' ' + consonants + ' ' + digits);
break;

case '110':
console.log(vowels + ' ' + consonants);
break;

case '101':
console.log(vowels + ' ' + digits);
break;

case '100':
console.log(vowels);
break;

case '011':
console.log(consonants + ' ' + digits);
break;

case '010':
console.log(consonants);
break;

case '001':
console.log(digits);
break;

case '000':
console.log('');
break;

default: //сюда попадать не должны
console.log('Something is wrong!');
break;
}

}

/*
в идеале для согласных и цифр надо проверять длину получаемой строки,
и если она равна 0, не выводить лишние пробелы
*/

/*
if (process.argv.length != 3)
{
process.stdout.write('Input string is incorrect.');
process.exit(1);
}

else
{
var inputString = process.argv[2];

if (inputString.length < 1 || inputString.length >= 10000)
{
process.stdout.write('Input string is incorrect.');
process.exit(1);
}

else
{
var vowels = "";
var consonants = "";
var digits = "";

for (var i = 0; i < inputString.length; i++)
{
switch(inputString[i])
{
case 'A': case 'E': case 'I': case 'O': case 'U': case 'Y':
case 'a': case 'e': case 'i': case 'o': case 'u': case 'y':
vowels += inputString.charAt(i);
break;

case 'B': case 'C': case 'D': case 'F': case 'G':
case 'H': case 'J': case 'K': case 'L': case 'M':
case 'N': case 'P': case 'Q': case 'R': case 'S':
case 'T': case 'V': case 'W': case 'X': case 'Z':
case 'b': case 'c': case 'd': case 'f': case 'g':
case 'h': case 'j': case 'k': case 'l': case 'm':
case 'n': case 'p': case 'q': case 'r': case 's':
case 't': case 'v': case 'w': case 'x': case 'z':
consonants += inputString.charAt(i);
break;

case '0': case '1': case '2': case '3': case '4':
case '5': case '6': case '7': case '8': case '9':
digits += inputString.charAt(i);
break;

default:
break;
}
}

var outputString = vowels + " " + consonants + " " + digits
//console.log(outputString)
process.stdout.write(outputString);
}
}
*/