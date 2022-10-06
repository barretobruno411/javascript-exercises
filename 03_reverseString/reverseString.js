const reverseString = function(string) {
    const splited = string.split("").reverse().join("");
    return splited
};
console.log(reverseString("test abc"))
// Do not edit below this line
module.exports = reverseString;
