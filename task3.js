/* Task 3 */

var inputString = process.argv[2];

if (inputString.length >= 1 & inputString.length <= 10000)
{
var vowels = inputString.replace(/[^AEIOUaeiou]/g, "");
var consonants = inputString.replace(/[AEIOUaeiou0-9 ]/g, "").replace(/[^a-zA-Z]/g, "");
var digits = inputString.replace(/[^0-9]/g, "");

var outputString = vowels + " " + consonants + " " + digits;

process.stdout.write(outputString.trim().replace("  ", " "));
}