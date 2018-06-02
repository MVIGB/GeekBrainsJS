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