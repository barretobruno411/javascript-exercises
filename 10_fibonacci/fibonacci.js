const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS"
    }
    array = [1,1]

    for (let i = 2; i <= Number(number); i++) {
        array.push(array[array.length - 1] + array[array.length - 2])
    }
    
    return array[number - 1]
};
console.log(fibonacci(6))
// Do not edit below this line
module.exports = fibonacci;
