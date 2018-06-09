/* Task 3 */

var inputString = process.argv[2];

if (inputString.length >= 1 & inputString.length <= 10000)
{
var vowels = inputString.replace(/[^aeiou]/gi, "");
var consonants = inputString.replace(/[^a-z]|[aeiou]/gi, "");
var digits = inputString.replace(/\D/g, "");

var outputString = vowels + " " + consonants + " " + digits;

process.stdout.write(outputString.trim().replace("  ", " "));
}