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

var outputString = '';
switch(code)
{
case '111':
outputString = vowels + ' ' + consonants + ' ' + digits;
break;

case '110':
outputString = vowels + ' ' + consonants;
break;

case '101':
outputString = vowels + ' ' + digits;
break;

case '100':
outputString = vowels;
break;

case '011':
outputString = consonants + ' ' + digits;
break;

case '010':
outputString = consonants;
break;

case '001':
outputString = digits;
break;

case '000':
outputString = '';
break;

default: //сюда попадать не должны
outputString = 'Something is wrong!';
break;
}

process.stdout.write(outputString);
}