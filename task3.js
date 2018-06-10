/* Task 3 */

var inputString = process.argv[2];

if (inputString.length >= 1 & inputString.length <= 10000)
{
var vowels = inputString.replace(/[^aeiouy]/gi, "");
var consonants = inputString.replace(/[^a-z]|[aeiouy]/gi, "");
var digits = inputString.replace(/\D/g, "");

process.stdout.write(vowels + " " + consonants + " " + digits);
}