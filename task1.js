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