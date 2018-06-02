/* Task 1 */

var inputString = process.argv[2];

if (inputString.length >= 1 & inputString.length <= 10000)
if (inputString.replace(/[^a-zA-Z]/g, "").toUpperCase() ==
    inputString.replace(/[^a-zA-Z]/g, "").toUpperCase().split("").reverse().join(""))
if (inputString.replace(/[^a-zA-Z]/g, "").length != 0)
console.log("YES");
else
console.log("NO");
else
console.log("NO");
else
console.log("NO");

/*
if ((process.argv[2].length >= 1 & process.argv[2].length <= 10000)
    &&
    (process.argv[2].replace(/[^a-zA-Z]/g, "").toUpperCase() ==
     process.argv[2].replace(/[^a-zA-Z]/g, "").toUpperCase().split("").reverse().join(""))
    &&
    (process.argv[2].replace(/[^a-zA-Z]/g, "").length != 0) //защита от дурака: если в строке нет букв
    ) //end if
   console.log("YES");
else
   console.log("NO");
*/
/*
заморочки с проверками не нужны
для вывода можно использовать и console.log, и process.stdout.write
if (process.argv.length != 3)
{
process.stdout.write("NO");
process.exit(1);
}

else
{
var inputString = process.argv[2];

if (inputString.length < 1 || inputString.length >= 10000)
{
process.stdout.write("NO");
process.exit(1);
}

var upperInputString = inputString.toUpperCase()

var normalizeUpperInputString = ""

for (var i = 0; i < upperInputString.length; i++)
{
switch(upperInputString[i])
{
case 'A':
case 'B':
case 'C':
case 'D':
case 'E':
case 'F':
case 'G':
case 'H':
case 'I':
case 'J':
case 'K':
case 'L':
case 'M':
case 'N':
case 'O':
case 'P':
case 'Q':
case 'R':
case 'S':
case 'T':
case 'U':
case 'V':
case 'W':
case 'X':
case 'Y':
case 'Z':

normalizeUpperInputString += upperInputString.charAt(i);
break;

default:
if (upperInputString.charAt(i) == " ")
{
break;
}
else
{
process.stdout.write("NO");
process.exit(1);
}

}
}


for (var i = 0; i < normalizeUpperInputString.length; i++)
{
if (normalizeUpperInputString[i] != normalizeUpperInputString[normalizeUpperInputString.length - 1 - i])
{
process.stdout.write("NO");
process.exit(1);
}
else
{
;
}
}

process.stdout.write("YES");
}
*/