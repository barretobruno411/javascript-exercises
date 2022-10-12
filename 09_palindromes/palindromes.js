const palindromes = function (string) {

    const initial = string.replace(/[^\w\s]|( )+/gi, '').toLowerCase()
    const resume = initial.split("").reverse().join("")
    return initial === resume
};
console.log(palindromes("A car, a man, a maraca."))
// Do not edit below this line
module.exports = palindromes;
