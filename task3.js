/* Task 3 */

var inputString = process.argv[2];

if (inputString.length >= 1 & inputString.length <= 10000)
{
var outputString = inputString.replace(/[^AEIOUaeiou]/g, "") + " "
                 + inputString.replace(/[AEIOUaeiou0-9 ]/g, "").replace(/[^a-zA-Z]/g, "") + " "
                 + inputString.replace(/[^0-9]/g, "");

process.stdout.write(outputString);
}