/* Task 1 */

var inputString = process.argv[2];

if (inputString.length >= 1 & inputString.length <= 10000)
{
if (inputString.replace(/[^a-zA-Z]/g, "").toUpperCase() ==
    inputString.replace(/[^a-zA-Z]/g, "").toUpperCase().split("").reverse().join(""))
process.stdout.write("YES");
else
process.stdout.write("NO");
}